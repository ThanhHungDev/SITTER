'use strict'

const CONFIG = require("../config");

module.exports = (sequelize, DataTypes) => {
    const BOOKING = sequelize.define('BOOKING', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        employer_id: {
            type: DataTypes.INTEGER
        },
        sitter_id: {
            type: DataTypes.INTEGER
        },
        status: { 
            type: DataTypes.INTEGER 
        },
        sitter_accept: { 
            type: DataTypes.INTEGER 
        },
        employer_accept: { 
            type: DataTypes.INTEGER 
        },
        cron_filter: {
            type: DataTypes.INTEGER,
            default: 0
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updated_at:  {
            type: DataTypes.DATE
        }
    }, {
        underscored: true,
        timestamps: true,
        tableName: "bookings"
    })
    BOOKING.prototype.toJSONFor = function () {
        return {
            id             : this.id,
            employer_id    : this.employer_id,
            sitter_id      : this.sitter_id,
            status         : this.status,
            sitter_accept  : this.sitter_accept,
            employer_accept: this.employer_accept,
            created_at     : this.created_at,
            updated_at     : this.updated_at
        }
    }
    
    // Class Method
    BOOKING.upsert = function (values, condition) {

        var model = this

        return model
            .findOne({ where: condition })
            .then(function(booking) {

                console.log("====================upsert===============")
                console.log(values,condition)
                console.log("====================end condition===============")
                if (!booking) {
                    console.log("====================upsert insert new===============")
                    // Item doesn't exist, so we create it
                    return model.create(values)
                }
                console.log("====================upsert update===============")
                // Item already exists, so we update it
                return booking.update(values, condition)
            })
            .catch( err => {
                console.log(err.message, "booking model" )
            })
        
    }

    BOOKING.getBookingByCondition = function( condition ){

        var conditionBooking = { 
            where: { id: condition.booking_id },
            include: [
                {
                    model: condition.modelDateBooking
                },
                {
                    model: condition.modelUser,
                    as : 'sitter'
                },
                {
                    model: condition.modelUser,
                    as : 'employer'
                },
            ],
            // logging: console.log
        }

        return this.findOne(conditionBooking, {raw: true})
    }
    BOOKING.getBookingsOfUsers = function( condition ){

        var { type, id, modelDateBooking, Sequelize } = condition

        id = parseInt(id) || 0


        var whereClause = { sitter_id: id }
        var ordersClause = [
            ['employer_id', 'ASC'],
            ['sitter_id', 'ASC'],
            ['status', 'ASC'],
            [modelDateBooking, 'work_date', 'DESC']
        ]
        var sequelizeDraw = Sequelize.literal('DISTINCT ON("BOOKING"."employer_id") *')
        if( type && type == CONFIG.CHANNEL.ROLE_USER.employer){

            var whereClause = { employer_id: id }
            var ordersClause = [
                ['sitter_id', 'ASC'],
                ['employer_id', 'ASC'],
                ['status', 'ASC'],
                [modelDateBooking, 'work_date', 'DESC']
            ]
            sequelizeDraw = Sequelize.literal('DISTINCT ON("BOOKING"."sitter_id") *')
        }

        return this.findAll({ 
            where: whereClause,
            // Add order conditions here....
            order: ordersClause,
            attributes : [
                sequelizeDraw,
                'id',
                'employer_id',
                'sitter_id',
                'status',
                'sitter_accept',
                'employer_accept',
                'created_at',
                'updated_at'
            ],
            include: [
                {
                    model: modelDateBooking
                }
            ],
            // logging: console.log
        }, {raw: true})
    }
    
    return BOOKING
};
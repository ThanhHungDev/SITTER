'use strict'

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
                
                if (!booking) {
                    // Item doesn't exist, so we create it
                    return model.create(values)
                }
    
                // Item already exists, so we update it
                return booking.update(values, condition)
            })
            .catch( err => {
                console.log(err.message, "booking model" )
            })
        
    }
    
    return BOOKING
};
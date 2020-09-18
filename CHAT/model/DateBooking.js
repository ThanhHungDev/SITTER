'use strict'

module.exports = (sequelize, DataTypes) => {
    const DATE_BOOKING = sequelize.define('DATE_BOOKING', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        booking_id: {
            type: DataTypes.INTEGER
        },
        work_date: { 
            type: DataTypes.DATE 
        },
        start:{
            type: DataTypes.TIME
        },
        finish: {
            type: DataTypes.TIME
        },
        type: { 
            type: DataTypes.STRING 
        },
        salary: { 
            type: DataTypes.STRING 
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at:  {
            type: DataTypes.DATE
        }
    }, {
        underscored: true,
        timestamps: false,
        tableName: "date_bookings"
    })
    DATE_BOOKING.prototype.toJSONFor = function () {
        return {
            id         : this.id,
            booking_id: this.booking_id,
            work_date  : this.work_date,
            start      : this.start,
            finish     : this.finish,
            type       : this.type,
            salary     : this.salary,
            created_at : this.created_at,
            updated_at : this.updated_at
        }
    }

    // Class Method
    DATE_BOOKING.desert = function (values, condition) {
        return this
            .destroy({ where: condition })
            .then(function() {
                return DATE_BOOKING.create(values);
            })
    }
    
    
    
    return DATE_BOOKING
};
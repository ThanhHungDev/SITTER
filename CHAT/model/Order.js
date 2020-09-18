'use strict'

module.exports = (sequelize, DataTypes) => {
    const ORDER = sequelize.define('ORDER', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        booking_id: {
            type: DataTypes.BIGINT
        },
        salary: {
            type: DataTypes.STRING,
            default: '0'
        },
        diff_time: {
            type: DataTypes.STRING,
            default: '0'
        },
        price: {
            type: DataTypes.STRING,
            default: '0'
        },
        vat: {
            type: DataTypes.STRING,
            default: '0'
        },
        fee_stripe: {
            type: DataTypes.STRING,
            default: '0'
        },
        profit: {
            type: DataTypes.STRING,
            default: '0'
        },
        status: {
            type: DataTypes.INTEGER,
            default: 0
        },
        note: {
            type: DataTypes.TEXT
        }
    }, {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        timestamps: true,
        tableName: "orders"
    })
    ORDER.prototype.toJSONFor = function () {
        return {
            id         : this.id,
            booking_id : this.booking_id,
            date_export: this.date_export,
            salary     : this.salary,
            diff_time  : this.diff_time,
            price      : this.price,
            vat        : this.vat,
            fee_stripe : this.fee_stripe,
            profit     : this.profit,
            status     : this.status,
            note       : this.note,
        }
    }
    // Class Method
    ORDER.upsert = function (values, condition) {

        console.log("vào upsert order")
        var model = this

        return model
            .findOne({ where: condition })
            .then(function(order) {
                console.log("vào upsert order", order)
                if (!order) {
                    // Item doesn't exist, so we create it
                    return model.create(values)
                }
    
                // Item already exists, so we update it
                return order.update(values, condition)
            })
            .catch( err => {
                console.log(err.message, "order model" )
            })
        
    }
    return ORDER
};

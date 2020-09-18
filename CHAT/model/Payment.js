'use strict'

module.exports = (sequelize, DataTypes) => {
    const PAYMENT = sequelize.define('PAYMENT', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.BIGINT
        },
        order_id: {
            type: DataTypes.BIGINT
        },
        stripe_payment: {
            type: DataTypes.TIME
        }
    }, {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        timestamps: true,
        tableName: "payments"
    })
    PAYMENT.prototype.toJSONFor = function () {
        return {

            id            : this.id,
            user_id       : this.user_id,
            order_id      : this.order_id,
            stripe_payment: this.stripe_payment,
        }
    }
    return PAYMENT
};

'use strict'

module.exports = (sequelize, DataTypes) => {
    const SCHEDULE = sequelize.define('USER', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.BIGINT
        },
        work_date: {
            type: DataTypes.STRING
        },
        start: {
            type: DataTypes.TIME
        },
        finish: {
            type: DataTypes.TIME
        },
        overnight: {
            type: DataTypes.BOOLEAN
        },
        type: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.INTEGER
        }
    }, {
        underscored: true,
        timestamps: false,
        tableName: "schedules"
    })
    SCHEDULE.prototype.toJSONFor = function () {
        return {
            id       : this.id,
            user_id  : this.user_id,
            work_date: this.work_date,
            start    : this.start,
            finish   : this.finish,
            overnight: this.overnight,
            type     : this.type,
            status   : this.status
        }
    }
    return SCHEDULE
};

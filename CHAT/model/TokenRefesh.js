'use strict' 
module.exports = (sequelize, DataTypes) => {
    const TOKEN_REFESH = sequelize.define('TOKEN_REFESH', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: { 
            type: DataTypes.BIGINT
        },
        token: { 
            type: DataTypes.STRING(255)
        },
        detect : { 
            type: DataTypes.STRING(1024) 
        }
    }, {
        underscored: true,
        timestamps: false,
        tableName: "token_refeshes"
    })
    TOKEN_REFESH.prototype.toJSONFor = function () {
        return {
            id     : this.id,
            user_id: this.user_id,
            token  : this.token,
            detect : this.detect
        }
    }
    return TOKEN_REFESH
}
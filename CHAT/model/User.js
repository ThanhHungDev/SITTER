'use strict'

module.exports = (sequelize, DataTypes) => {
    const USER = sequelize.define('USER', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        avatar: {
            type: DataTypes.STRING
        },
        first_name: {
            type: DataTypes.STRING
        },
        last_name : {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: { 
            type: DataTypes.STRING 
        },
        first_name_furigana: { 
            type: DataTypes.STRING 
        },
        last_name_furigana: { 
            type: DataTypes.STRING 
        },
        birth_date: { 
            type: DataTypes.DATE 
        },
        gender: { 
            type: DataTypes.INTEGER 
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
        tableName: "users"
    })
    USER.prototype.toJSONFor = function () {
        return {
            id                 : this.id,
            avatar             : this.avatar,
            first_name         : this.first_name,
            last_name          : this.last_name,
            email              : this.email,
            first_name_furigana: this.first_name_furigana,
            last_name_furigana : this.last_name_furigana,
            birth_date         : this.birth_date,
            gender             : this.gender
        }
    }
    return USER
};
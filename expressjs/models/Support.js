
'use strict';
module.exports = (sequelize, DataTypes) => {
    var Support = sequelize.define('Support', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        surname: {
            allowNull: false,
            type: DataTypes.STRING
        },
        phone: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        address: {
            allowNull: false,
            type: DataTypes.STRING
        },
        supportType: {
            allowNull: false,
            type: DataTypes.STRING
        },
        amount: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        sendType: {
            allowNull: false,
            type: DataTypes.STRING
        },
    });
    return Support;
}
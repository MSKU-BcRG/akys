'use strict';
module.exports = (sequelize, DataTypes) => {
    var ConfirmedSupport = sequelize.define('ConfirmedSupport', {
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
        confirmName: {
            allowNull: false,
            type: DataTypes.STRING
        },
        confirmSurname: {
            allowNull: false,
            type: DataTypes.STRING
        },
        confirmSTK: {
            allowNull: false,
            type: DataTypes.STRING
        },
        status: {
            allowNull: true,
            type: DataTypes.STRING
        },
    });
    return ConfirmedSupport;
}

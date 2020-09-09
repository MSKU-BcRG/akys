
'use strict';
module.exports = (sequelize, DataTypes) => {
    var ConfirmedNeed = sequelize.define('ConfirmedNeed', {
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
        needType: {
            allowNull: false,
            type: DataTypes.STRING
        },
        amount: {
            allowNull: false,
            type: DataTypes.INTEGER
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
        urgency: {
            allowNull: true,
            type: DataTypes.STRING
        },
        status: {
            allowNull: true,
            type: DataTypes.STRING
        },
    });
    return ConfirmedNeed;
}
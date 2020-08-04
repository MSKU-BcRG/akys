
'use strict';
module.exports = (sequelize, DataTypes) => {
    var Need = sequelize.define('Need', {
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
    });
    return Need;
}
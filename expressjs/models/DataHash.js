
'use strict';
module.exports = (sequelize, DataTypes) => {
    var DataHash = sequelize.define('DataHash', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        operationId: {
            allowNull: false,
            type: DataTypes.STRING
        },
        hashValue: {
            allowNull: false,
            type: DataTypes.STRING
        },
    });
    return DataHash;
}
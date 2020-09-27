'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('DataHashes', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                autoIncrement: true,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            hashValue: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            operationId: {
                allowNull: false,
                type: Sequelize.STRING
            },

        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('DataHashes');
    }
}
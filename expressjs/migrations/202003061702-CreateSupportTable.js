'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Supports', {
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
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            surname: {
                allowNull: false,
                type: Sequelize.STRING
            },
            phone: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            address: {
                allowNull: false,
                type: Sequelize.STRING
            },
            supportType: {
                allowNull: false,
                type: Sequelize.STRING
            },
            amount: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            sendType: {
                allowNull: false,
                type: Sequelize.STRING
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Supports');
    }
}
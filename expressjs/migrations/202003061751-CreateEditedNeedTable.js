'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('ConfirmedNeeds', {
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
            needType: {
                allowNull: false,
                type: Sequelize.STRING
            },
            amount: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            confirmName:{
                allowNull: false,
                type: Sequelize.STRING
            },
            confirmSurname: {
                allowNull: false,
                type: Sequelize.STRING
            },
            confirmSTK: {
                allowNull: false,
                type: Sequelize.STRING
            },
            urgency: {
                allowNull: true,
                type: Sequelize.STRING
            },
            status: {
                allowNull: true,
                type: Sequelize.STRING
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('ConfirmedNeeds');
    }
}
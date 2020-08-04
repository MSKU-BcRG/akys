'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Needs', {
            id:{
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
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Needs');
    }
}
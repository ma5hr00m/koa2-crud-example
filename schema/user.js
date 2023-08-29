const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    return sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            field: 'id',
        },
        username: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: 'username',
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: 'password',
        },
    });
}
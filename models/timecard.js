const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Timecard extends Model {}

Timecard.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hours: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: true
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        last_modified: {
            type: DataTypes.DATE,
            allowNull: true
        },
        individual_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'individual',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'timecard'
    }
);

module.exports = Timecard;
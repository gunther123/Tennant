const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

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
        start_time: {

            // Best way to capure datetime for punch cards?
            type: DataTypes.DATE,
            allowNull: true
        },
        end_time: {
            type: DataTypes.DATE,
            allowNull: true
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: true
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            // What else do I need here?
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
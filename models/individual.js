const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Individual extends Model {}

Individual.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        department_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'department',
                key: 'id'
            }
        },
        timecards: {
            type: DataTypes.INTEGER,
            references: {
                model: 'timecards',
                key: 'id'
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        last_modified: {
            type: DataTypes.DATE,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        },
        disabled: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        last_login: {
            type: DataTypes.DATE,
            allowNull: true
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        hooks: {
            async beforeCreate(newIndividualData) {
                newIndividualData.password = await bcrypt.hash(newIndividualData.password, 10);
                return newIndividualData;
            },
            async beforeUpdate(updatedIndividualData) {
                updatedIndividualData.password = await bcrypt.hash(updatedIndividualData.password, 10);
                return updatedIndividualData;
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'individual'
    }
);

module.exports = Individual;
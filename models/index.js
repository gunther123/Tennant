const Department = require('./Department');
const Timecard = require('./Timecard');
const Individual = require('./Individual');

Department.hasMany(Individual, {
    foreignKey: 'department_id'
});

Individual.belongsTo(Department, {
    foreignKey: 'department_id'
});

Timecard.belongsTo(Individual, {
    foreignKey: 'individual_id'
});

module.exports = { Department, Individual, Timecard };
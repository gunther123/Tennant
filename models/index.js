const Department = require('./department');
const Timecard = require('./timecard');
const Individual = require('./individual');

// Department.hasMany(Individual, {
//     foreignKey: 'department_id'
// });

// Individual.belongsTo(Department, {
//     foreignKey: 'department_id'
// });

// Timecard.belongsTo(Individual, {
//     foreignKey: 'individual_id'
// });

module.exports = { Department, Individual, Timecard };
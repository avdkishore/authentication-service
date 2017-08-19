const path = require('path');
const fs = require('fs');

module.exports = {
  createTables: sequelize => {
    const relativePath = './createTables.sql';
    const fullPath = path.join(__dirname, relativePath);
    const query = fs.readFileSync(fullPath, 'utf8');
    return sequelize.query(query);
  },
  dropTables: sequelize => {
    const relativePath = './dropTables.sql';
    const fullPath = path.join(__dirname, relativePath);
    const query = fs.readFileSync(fullPath, 'utf8');
    return sequelize.query(query);
  }
};

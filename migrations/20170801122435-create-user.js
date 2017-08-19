module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('users', {
      username: {
        primaryKey: true,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      role: {
        type: Sequelize.ENUM,
        values: ['user', 'admin'],
        allowNull: false,
        defaultValue: 'user'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  // eslint-disable-next-line
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sources');
  }
};

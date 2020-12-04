'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
    'favorites',
    'userId',
   Sequelize.INTEGER
  );
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
    'favorites',
    'userId'
  );
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

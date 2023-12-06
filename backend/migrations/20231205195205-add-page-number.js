

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Remove the previously added unique constraint on searchTerm
    await queryInterface.removeConstraint('Searches', 'unique_searchTerm_constraint');

    // Add the pageNumber field
    await queryInterface.addColumn('Searches', 'pageNumber', {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: null,
    });

    // Add the unique constraint to searchTerm and pageNumber
    await queryInterface.addConstraint('Searches', {
      fields: ['searchTerm', 'pageNumber'],
      type: 'unique',
      name: 'unique_searchTerm_pageNumber_constraint'
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the unique constraint on searchTerm and pageNumber
    await queryInterface.removeConstraint('Searches', 'unique_searchTerm_pageNumber_constraint');
    await queryInterface.removeColumn('Searches', 'pageNumber');

    // Add back the previous unique constraint on searchTerm
    await queryInterface.addConstraint('Searches', {
      fields: ['searchTerm'],
      type: 'unique',
      name: 'unique_searchTerm_constraint'
    });
  }
};

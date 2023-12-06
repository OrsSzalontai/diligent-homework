module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn('Searches', 'cache_hit', {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null,
      });
  
      await queryInterface.addConstraint('Searches', {
        fields: ['searchTerm'],
        type: 'unique',
        name: 'unique_searchTerm_constraint'
      });
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.removeConstraint('Searches', 'unique_searchTerm_constraint');
      await queryInterface.removeColumn('Searches', 'cache_hit');
    }
  };
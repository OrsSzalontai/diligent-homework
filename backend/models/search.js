const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Search extends Model {
    static associate(models) {
      // define association here
    }
  }
  Search.init({
    searchTerm: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    results: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Search',
  });
  return Search;
};
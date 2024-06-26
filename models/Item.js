// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

class Item extends Model {}

Product.init(
  {
    // Define columns for the Itemtable
    id: {
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true, 
      autoIncrement: true, 
    },
    product_name: {
      type: DataTypes.STRING, 
      allowNull: false, 
    },
    price: {
      type: DataTypes.DECIMAL, 
      allowNull: false, 
      validate: {
        isDecimal: true, 
      },
    },
    stock: {
      type: DataTypes.INTEGER, 
      allowNull: false, 
      defaultValue: 10, 
      validate: {
        isNumeric: true, 
      },
    },
    category_id: {
      type: DataTypes.INTEGER, 
      references: {
        model: "category",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
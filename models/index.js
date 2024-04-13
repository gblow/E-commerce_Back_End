// import models
const Item= require('./Item');
const Category = require('./List');
const Tag = require('./Tag');
const ItemTag = require('./ItemTag');

// Products belongsTo Category
Item.belongsTo(Category, {
    foreignKey: 'list_id',
});

// Categories have many Products
List.belongsToMany(Tag, {
    through: ItemTag,
    foreignKey: 'list_id',
});

// Products belongToMany Tags (through ItemTag)
ItemTag.belongsToMany(Product, {
    through: ItemTag,
    foreignKey: 'tag_id',
});

// Tags belongToMany Products (through ItemTag)
List.hasMany(Product, {
    foreignKey: 'list_id',
});

module.exports = {
 Item,
  List,
  Tag,
  ItemTag,
};

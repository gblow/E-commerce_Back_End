const { Item} = require('../models');

const items = [
  {
    product_name: 'Produce',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Towels',
    price: 90.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Bed Spread',
    price: 22.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'TV',
    price: 12.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Makeup',
    price: 29.99,
    stock: 22,
    category_id: 2,
  },
];

const seedItems = () => Product.bulkCreate(items);

module.exports = seedItems;

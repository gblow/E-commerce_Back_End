const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'sheets',
  },
  {
    tag_name: 'cover',
  },
  {
    tag_name: 'face towel',
  },
  {
    tag_name: 'hand towel',
  },
  {
    tag_name: 'juice',
  },
  {
    tag_name: 'baby food',
  },
  {
    tag_name: 'blush',
  },
  {
    tag_name: 'lipstick',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;

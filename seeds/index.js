const seedCategories = require('./listSeeder');
const seedItems = require('./itemSeeders');
const seedTags = require('./tagSeeder');
const seedItemTags = require('./tagItemSeeder');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log(
    '\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log(
    '\n----- CATEGORIES SEEDED -----\n');

  await seedItems();
  console.log(
    '\n----- Item SEEDED -----\n');

  await seedTags();
  console.log(
    '\n----- TAGS SEEDED -----\n');

  await seedItemTags();
  console.log(
    '\n----- Item TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();

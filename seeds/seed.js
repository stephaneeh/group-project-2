const sequelize = require("../config/connection");
const { User, Game, Genre, Request, Console, Review } = require("../models");

const userData = require("./userData.json");
const gameData = require("./gameData.json");
const genreData = require("./genreData.json");
// const requestData = require('./requestData.json');
// const console_data = require('./console_data.json');
// const reviewData = require('./reviewData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  console.log("--------------User DATA SEEDED--------------");

  await Game.bulkCreate(gameData, {
    returning: true,
  });

  console.log("--------------Game DATA SEEDED--------------");

  await Genre.bulkCreate(genreData, {
    returning: true,
  });

  console.log("--------------Genre DATA SEEDED--------------");
  //   await Request.bulkCreate(requestData, {
  //     returning: true,
  //   });

  //   await Console.bulkCreate(console_data, {
  //     returning: true,
  //   });

  //   await Review.bulkCreate(reviewData, {
  //     returning: true,
  //   });

  process.exit(0);
};

seedDatabase();

'use strict';
const todos = require("../public/api/todos.json");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('todos', todos);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('todos', null, {});
  }
};

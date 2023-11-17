import dotenv from 'dotenv';

dotenv.config();

import { Sequelize } from 'sequelize-typescript';
import { Todo } from '../models/Todo';

const DB_URI: string = process.env.DB_CONNECT!

const sequelize = new Sequelize(DB_URI, {
  models: [Todo],
  dialectOptions: {
    ssl: true,
  },
});

export async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

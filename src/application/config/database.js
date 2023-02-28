import { Sequelize } from 'sequelize';
import { Config } from '../shared/config.js';

export class Database {
  static #instance;
  #sequelize;

  constructor() {
    this.#sequelize = new Sequelize(
        Config.NAME,
        Config.DB_USERNAME,
        Config.PASSWORD, {
          dialect: 'postgres',
          port: Config.DB_PORT,
          host: Config.HOST,
        });
  }

  static getInstance() {
    if (!this.#instance) {
      this.#instance = new Database();
      return this.#instance;
    }
    return this.#instance;
  }

  async authenticate() {
    try {
      return await this.#sequelize.authenticate();
    } catch (e) {
      throw new Error(e.message);
    }
  }

  getConnection() {
    return this.#sequelize;
  }
}
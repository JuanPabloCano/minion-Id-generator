import express, { json, Router } from 'express';
import { logger } from './shared/logger/logger.js';
import morgan from 'morgan';
import compression from 'compression';
import minionRouter from '../infrastructure/entry_points/routes/minion.routes.js';
import { Database } from './config/database.js';

export class App {
  #app;
  #router;
  #database;

  constructor() {
    this.#database = Database.getInstance();
    this.#app = express();
    this.#router = Router();
    this.#middlewares();
    this.#routes();
  }

  async start(port) {
    return this.#app.listen(port, () => {
      logger.info(`Open server on http://localhost:${port}`);
      this.#database.authenticate()
          .then(() => logger.info('Database connected successfully'))
          .catch(err => logger.error(err));
    });
  }

  #middlewares() {
    this.#app.use(json());
    this.#app.use(morgan('dev'));
    this.#app.use(compression());
  }

  #routes() {
    this.#app.use(minionRouter(this.#router));
  }
}
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
    this.#app.get('/', (_req, res) => res.send('Server working ok'));
    this.#app.use(minionRouter(this.#router));
  }
}

// const token = '2357111317192329';
//
// function shortenToken(token, index) {
//   return token.substr(index, 5);
// }
//
// const index = 3;
// const shortenedToken = shortenToken(token, index);
// console.log(shortenedToken);

//
// function isPrimeNumber(no) {
//   if (no < 2) {
//     return false;
//   }
//   for (let i = 2; i < no; i++) {
//     if (no % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }
// const arr = []
//
// for (let i = 1; i <= 1000; i++) {
//   if (isPrimeNumber(i)) {
//     arr.push(i)
//   }
// }
//
// const token = arr.join('')
// token
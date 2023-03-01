import { MinionDao } from './dao/Minion.dao.js';

export class MinionPgAdapter {
  #minionDao;

  constructor() {
    this.#minionDao = MinionDao;
  }

  async updateMinionId(data) {
    try {
      return await this.#minionDao.create(data);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async findAll() {
    try {
      return await this.#minionDao.findAll();
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
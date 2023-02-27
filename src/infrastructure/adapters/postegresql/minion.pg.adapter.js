import database from './dao/Minion.dao.js';

export class MinionPgAdapter {

  #minionDao;

  constructor() {
    this.#minionDao = database;
  }

  async save(data) {
    try {
      return await this.#minionDao.save(data);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  test() {
    console.log('Funciono correctamente desde el servicio');
  }
}
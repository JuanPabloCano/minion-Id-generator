export class MinionPgAdapter {
  #minionSchema;

  constructor({ minionSchema }) {
    this.#minionSchema = minionSchema;
  }

  async create(data) {
    try {
      return (await this.#minionSchema).create(data);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async findAll() {
    try {
      return (await this.#minionSchema).findAll();
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
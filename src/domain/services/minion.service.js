import { Minion } from '../models/Minion.js';

export class MinionService {

  #minionPgAdapter;

  constructor({ minionPgAdapter }) {
    this.#minionPgAdapter = minionPgAdapter;
  }

  getUsers({ id, paramNumber }) {
    this.#minionPgAdapter.test();
    const minion = new Minion()
        .setMinionAsk(id)
        .setRelatedCode(paramNumber)
        .build();
    return [ 'Alice', 'Bob', 'Charlie', minion ];
  }
}
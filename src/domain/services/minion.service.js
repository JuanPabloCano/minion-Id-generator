import { Minion } from '../models/Minion.js';

export class MinionService {

  #minionPgAdapter;
  #readCommanderLambdaStringService;
  #POSITIONS;
  #MAX_ALLOWED_INDEX;
  #MIN_ALLOWED_INDEX;

  constructor({ minionPgAdapter, readCommanderLambdaStringService }) {
    this.#minionPgAdapter = minionPgAdapter;
    this.#readCommanderLambdaStringService = readCommanderLambdaStringService;
    this.#POSITIONS = 5;
    this.#MAX_ALLOWED_INDEX = 10000;
    this.#MIN_ALLOWED_INDEX = 0;
  }

  async updateMinionId(codeIdAsked) {
    try {
      const primeCode = await this.#transformCommanderLambdaString(codeIdAsked);
      return this.#minionPgAdapter.create(
          new Minion()
              .setMinionAsk(codeIdAsked)
              .setRelatedCode(primeCode)
              .build(),
      );
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async findAll() {
    try {
      return await this.#minionPgAdapter.findAll();
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async #transformCommanderLambdaString(codeIdAsked) {
    const commanderLambdaString = await this.#readCommanderLambdaStringService.execute();
    if (codeIdAsked > this.#MAX_ALLOWED_INDEX || codeIdAsked < this.#MIN_ALLOWED_INDEX) {
      throw new Error('Invalid Minion Id Asked');
    }
    return this.#shortenCommanderLambdaString(commanderLambdaString, Number(codeIdAsked));
  }

  #shortenCommanderLambdaString(token, index) {
    return token.slice(index, index + this.#POSITIONS);
  }
}
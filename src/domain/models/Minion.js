export class Minion {
  #minionAsk;
  #relatedCode;

  setMinionAsk(minionAsk) {
    this.#minionAsk = minionAsk;
    return this;
  }

  setRelatedCode(number) {
    this.#relatedCode = number;
    return this;
  }

  build() {
    return {
      minionAsk: this.#minionAsk,
      relatedCode: this.#relatedCode,
    };
  }
}
export class MinionDto {
  #id;
  #paramNumber;

  constructor(id, paramNumber) {
    this.#id = id;
    this.#paramNumber = paramNumber;
  }
}
export class MinionController {
  #minionService;

  constructor({ minionService }) {
    this.#minionService = minionService;
  }

  getUsers(req, res) {
    const users = this.#minionService.getUsers(req.query);
    return res.json(users);
  }
}
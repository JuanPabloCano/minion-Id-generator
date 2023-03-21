import { HTTP_ERR0R_MESSAGE, HTTP_STATUS_CODE } from '../../../application/shared/utils.js';

export class MinionController {
  #minionService;

  constructor(minionService) {
    this.#minionService = minionService;
  }

  async updateMinionId(req, res) {
    try {
      const { codeIdAsked } = req.params;
      const minion = await this.#minionService.updateMinionId(codeIdAsked);
      return res
          .status(HTTP_STATUS_CODE.OK)
          .json(minion);
    } catch (err) {
      if (err.message === HTTP_ERR0R_MESSAGE.VALIDATION_ERROR) {
        return res
            .status(HTTP_STATUS_CODE.BAD_REQUEST)
            .json({ error: HTTP_ERR0R_MESSAGE.ID_ALREADY_CREATED });
      }
      return res.json({ error: err.message });
    }
  }

  async findAll(_req, res) {
    try {
      const minions = await this.#minionService.findAll();
      return res
          .status(HTTP_STATUS_CODE.OK)
          .json(minions);
    } catch (err) {
      return res.json({ error: err });
    }
  }
}
import container from '../../../application/shared/dependency-injection/container.js';
import { DI_UTILS } from '../../../application/shared/utils.js';

const minionController = container.resolve(DI_UTILS.MINION_CONTROLLER);

const minionRouter = (router) => {
  router.route('/minion')
      .get(minionController.getUsers.bind(minionController));

  return router;
};

export default minionRouter;
import container from '../../../application/shared/dependency-injection/container.js';
import { DI_UTILS, SERVER_UTILS } from '../../../application/shared/utils.js';

const minionController = container.resolve(DI_UTILS.MINION_CONTROLLER);

const minionRouter = router => {

  router
      .get('/', (_req, res) => res.send(SERVER_UTILS.WELCOME_MESSAGE));

  router
      .route('/minion')
      .get(minionController.findAll.bind(minionController));

  router
      .route('/minion/:codeIdAsked')
      .get(minionController.updateMinionId.bind(minionController));

  return router;
};

export default minionRouter;
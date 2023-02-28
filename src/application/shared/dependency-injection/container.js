import { MinionService } from '../../../domain/services/minion.service.js';
import { asClass, asFunction, createContainer } from 'awilix';
import { MinionController } from '../../../infrastructure/entry_points/controllers/minion.controller.js';
import { ReadCommanderLambdaStringService } from '../../../domain/services/readCommanderLambdaString.service.js';
import { MinionPgAdapter } from '../../../infrastructure/adapters/postgresql/minion.pg.adapter.js';
import { minionSchema } from '../../../infrastructure/adapters/postgresql/dao/Minion.dao.js';

const container = createContainer();

container.register({
  minionService: asClass(MinionService).scoped(),
  minionController: asClass(MinionController).scoped(),
  minionPgAdapter: asClass(MinionPgAdapter).scoped(),
  readCommanderLambdaStringService: asClass(ReadCommanderLambdaStringService).scoped(),
  minionSchema: asFunction(minionSchema).scoped(),
});

export default container;
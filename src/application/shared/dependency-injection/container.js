import { MinionService } from '../../../domain/services/minion.service.js';
import { asClass, createContainer } from 'awilix';
import { MinionController } from '../../../infrastructure/entry_points/controllers/minion.controller.js';
import { ReadCommanderLambdaStringService } from '../../../domain/services/readCommanderLambdaString.service.js';
import { MinionPgAdapter } from '../../../infrastructure/adapters/postgresql/minion.pg.adapter.js';

const container = createContainer({
  injectionMode: 'CLASSIC'
});

container.register({
  minionService: asClass(MinionService).scoped(),
  minionController: asClass(MinionController).scoped(),
  minionPgAdapter: asClass(MinionPgAdapter).scoped(),
  readCommanderLambdaStringService: asClass(ReadCommanderLambdaStringService).scoped(),
});

export default container;
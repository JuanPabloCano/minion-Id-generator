import { MinionService } from '../../../domain/services/minion.service.js';
import { asClass, createContainer } from 'awilix';
import { Database } from '../../config/database.js';
import { MinionController } from '../../../infrastructure/entry_points/controllers/minion.controller.js';
import { MinionPgAdapter } from '../../../infrastructure/adapters/postegresql/minion.pg.adapter.js';

const container = createContainer();

container.register({
  minionService: asClass(MinionService).scoped(),
  minionController: asClass(MinionController).scoped(),
  minionPgAdapter: asClass(MinionPgAdapter).scoped(),
});

export default container;
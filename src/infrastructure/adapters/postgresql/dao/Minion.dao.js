import { DataTypes, Model } from 'sequelize';
import { Database } from '../../../../application/config/database.js';
import { logger } from '../../../../application/shared/logger/logger.js';
import { Config } from '../../../../application/shared/config.js';

const database = Database.getInstance();

export function minionSchema() {
  class MinionDao extends Model {
  }

  MinionDao.init({
        minionAsk: {
          type: DataTypes.STRING,
        },
        relatedCode: {
          type: DataTypes.STRING,
          primaryKey: true,
        },
      },
      {
        sequelize: database.getConnection(),
        tableName: Config.MINION_TABLE,
        timestamps: false,
        schema: Config.SCHEMA,
        modelName: Config.MODEL_NAME,
      },
  );

  MinionDao.sync()
      .then(() => logger.info('Database created successfully'))
      .catch(err => logger.info(`Error creating database: ${err.message}`));

  return MinionDao;
}

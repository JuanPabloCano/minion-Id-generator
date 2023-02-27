import { DataTypes } from 'sequelize';
import { Database } from '../../../../application/config/database.js';

const database = Database.getInstance();

database.define('Minion', {
  minionAsk: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  relatedCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default database;
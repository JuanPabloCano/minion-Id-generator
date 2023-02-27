import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: `${__dirname}/../../../environments/.env`
});

export class Config {
  static NAME = process.env.NAME;
  static DB_USERNAME = process.env.DB_USERNAME;
  static PASSWORD = process.env.PASSWORD;
  static DB_PORT = Number(process.env.DB_PORT);
  static HOST = process.env.HOST;
}
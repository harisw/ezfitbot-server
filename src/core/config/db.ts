import 'dotenv/config';
import { get } from 'env-var';
import { Dialect } from 'sequelize';

export const dbConfig = {
  HOST: get('DB_HOST').required().asUrlString(),
  USER: get('DB_USER').required().asString(),
  PASSWORD: get('DB_PASSWORD').required().asString(),
  DB: get('DB_NAME').required().asString(),
  PORT: get('DB_PORT').required().asPortNumber(),
  DIALECT: "mysql" as Dialect,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
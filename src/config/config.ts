import { IConfigProps } from 'src/interfaces/config.interface';

export const config = (): IConfigProps => ({
  port: parseInt(process.env.PORT, 10) || 3001,
  database: {
      port: parseInt(process.env.DB_PORT),
      host: process.env.DB_HOST,
      dbName: process.env.DB,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
  },
});

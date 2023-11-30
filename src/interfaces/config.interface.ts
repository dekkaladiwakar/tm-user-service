interface IPostgresqlConfigProps {
  port: number;
  host: string;
  dbName: string;
  username: string;
  password: string;
}

export interface IConfigProps {
  port: number;
  database: IPostgresqlConfigProps,
}

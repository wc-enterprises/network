export const environment = {
  production: false,
  type: 'postgres' as const,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_USER_PASSWORD,
  database: process.env.DB_NAME,
};
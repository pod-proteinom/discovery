const env = process.env;
module.exports = {
  server: {
    port: 8080
  },
  database: {
    uri: `postgres://${env.POSTGRES_USER}:${env.POSTGRES_PASSWORD}@database:5432/${env.POSTGRES_DB}`,
    options: {

    }
  }
}
module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "12345678abc",
  PORT: 3307,
  DB: "fish17tb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

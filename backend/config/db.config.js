require("dotenv").config();

module.exports = {
  HOST: process.env.HOST,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DB: process.env.DB,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
// .env
// USER = "default";
// HOST = "ep-blue-sun-a1ykfegn-pooler.ap-southeast-1.aws.neon.tech";
// PASSWORD = "T9Q2DyJAgYtB";
// DB = "verceldb";
// PORT = "5000";
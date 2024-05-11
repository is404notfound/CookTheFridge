import mysql from "promise-mysql";

const dbConfig = {
  host: "XXXXX",
  port: 00000,
  user: "XXXXX",
  password: "XXXXX",
  database: "XXXXX",
};

export default mysql.createPool(dbConfig);
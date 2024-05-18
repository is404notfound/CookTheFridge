import statusUtil from "../../utils/statusUtil.js";
import pool from "../pool.js";

const tableName = "user";

const user = {
  selectAll: async () => {
    const query = `SELECT * FROM ${tableName}`;
    const result = await pool.query(query);
 
    return result ? statusUtil.success(result) : statusUtil.false();
  },
  select: async (userId) => {
    const query = `SELECT * FROM ${tableName} WHERE userId = ?`;
    const result = await pool.query(query, [userId]);

    return result ? statusUtil.success(result) : statusUtil.false();
  },
  insert: async (userId, userName) => {
    const query = `INSERT INTO ${tableName} (userId, userName) VALUES (?, ?)`;
    const result = await pool.query(query, [userId, userName]);

    return result ? statusUtil.success(result) : statusUtil.false();
  },
};

export default user;
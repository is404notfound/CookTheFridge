
import statusUtil from "../../utils/statusUtil.js";
import pool from "../pool.js";

const tableName = "ingredients";

const ingredients = {
  selectAll: async () => {
    const query = `SELECT * FROM ${tableName}`;
    const result = await pool.query(query);

    return result ? statusUtil.success(result) : statusUtil.false();
  },
  insert: async (id, name, image) => {
    const query = `INSERT INTO ${tableName} (id, name, image) VALUES (?, ?, ?)`;
    const result = await pool.query(query, [id, name, image]);

    return result ? statusUtil.success(result) : statusUtil.false();
  },
  delete: async (id) => {
    const query = `DELETE FROM ${tableName} WHERE id = ?`;
    const result = await pool.query(query, [id]);

    return result ? statusUtil.success(result) : statusUtil.false();
  }
};
export default ingredients;
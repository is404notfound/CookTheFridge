
import statusUtil from "../../utils/statusUtil.js";
import pool from "../pool.js";

const tableName = "cuisines";

const cuisines = {
  selectAll: async () => {
    const query = `SELECT * FROM ${tableName}`;
    const result = await pool.query(query);

    return result ? statusUtil.success(result) : statusUtil.false();
  },
  insert : async (id, name, ingredients, image, tags, description) => {
    const query = `INSERT INTO ${tableName} (id, name, ingredients, image, tags, description) VALUES (?, ?, ?, ?, ?, ?)`;
    const result = await pool.query(query, [id, name, ingredients, image, tags, description]);

    return result ? statusUtil.success(result) : statusUtil.false();
  }
};

export default cuisines;
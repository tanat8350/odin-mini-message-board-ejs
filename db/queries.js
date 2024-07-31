const pool = require('./pool');

module.exports = {
  getAllMessages: async () => {
    const { rows } = await pool.query('SELECT * FROM messages');
    return rows;
  },

  getMessage: async (id) => {
    const { rows } = await pool.query('SELECT * FROM messages WHERE id=$1', [
      id,
    ]);
    return rows;
  },

  insertMessages: async (username, message) => {
    await pool.query(
      'INSERT INTO messages (username, message) VALUES ($1, $2)',
      [username, message]
    );
  },
};

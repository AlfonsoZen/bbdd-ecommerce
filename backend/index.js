// app.js

const express = require('express');
const { initialize, close, oracledb } = require('./oracle.js');
const app = express();

app.use(express.json());

// Initialize the database connection
initialize().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
    });
});

// Sample route to get all users
app.get('/users', async (req, res) => {
    let connection;
    try {
        connection = await oracledb.getConnection();
        const result = await connection.execute('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Error closing connection:', err);
            }
        }
    }
});

// Gracefully close the database connection pool on server shutdown
process.on('SIGINT', async () => {
    await close();
    process.exit(0);
});

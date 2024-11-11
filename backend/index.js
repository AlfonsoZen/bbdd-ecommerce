// app.js

const express = require('express');
const { initialize, close, oracledb } = require('./oracle.js');
const cors = require('cors')

const app = express();

app.use(cors());

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

// Sample route to get all products
app.get('/products', async (req, res) => {
    let connection;
    try {
        connection = await oracledb.getConnection();
        // Convert the CLOB 'description' to a string with TO_CHAR
        const result = await connection.execute(`
            SELECT 
                p.id,
                p.name AS product_name,
                b.name AS brand_name,
                p.seller_id,
                p.price,
                TO_CHAR(p.description) AS description,
                p.color,
                p.stock,
                p.created_at
            FROM 
                products p
            JOIN 
                brands b 
            ON p.brand_id = b.id
        `);
        console.log(result.rows);

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

// Sample route to get all brands
app.get('/brands', async (req, res) => {
    let connection;
    try {
        connection = await oracledb.getConnection();
        // Convert the CLOB 'description' to a string with TO_CHAR
        const result = await connection.execute(`
            SELECT id, name FROM brands
        `);
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

// Sample route to get products by brands
app.get('/productsByBrands/:brandName', async (req, res) => {
    const { brandName } = req.params; // Extract brand name from URL parameters
    let connection;
    try {
        connection = await oracledb.getConnection();
        // Convert the CLOB 'description' to a string with TO_CHAR
        const result = await connection.execute(
            `
            SELECT 
                p.id,
                p.name AS product_name,
                b.name AS brand_name,
                p.seller_id,
                p.price,
                TO_CHAR(p.description) AS description,
                p.color,
                p.stock,
                p.created_at
            FROM 
                products p
            JOIN 
                brands b ON p.brand_id = b.id
            WHERE 
                LOWER(b.name) = LOWER(:brandName)
            `,
            [brandName] // Bind variable for brand name
        );
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

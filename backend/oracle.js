// db.js

const oracledb = require('oracledb');

async function initialize() {
    try {
        await oracledb.createPool({
            user: 'ecommerce', // Your Oracle username
            password: 'ecommerce', // Your Oracle password
            connectString: 'localhost:1521/free' // Oracle connection string
        });
        console.log('Connection pool started');
    } catch (err) {
        console.error('Failed to create connection pool:', err);
    }
}

async function close() {
    try {
        await oracledb.getPool().close(10);
        console.log('Connection pool closed');
    } catch (err) {
        console.error('Failed to close connection pool:', err);
    }
}

module.exports = {
    initialize,
    close,
    oracledb
};

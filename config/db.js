const mysql = require('mysql2');

const mysqlPool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin',
    database: 'shop',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = mysqlPool.promise();

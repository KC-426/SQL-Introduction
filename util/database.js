const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'kuldeep',
    database: 'node-complete',
    password: '18330468'
})

module.exports = pool.promise()

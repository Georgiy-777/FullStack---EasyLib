
const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'node_postgres',
    password: '!9ex/zL-@GzZa!W',
    port: 5432,
});

module.exports = pool;

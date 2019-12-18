const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    database: 'xp',
    port: 5432
});

console.log('Configured postgresDb ', pool);

module.export = pool;

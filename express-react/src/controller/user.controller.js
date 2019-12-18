// const PostgresDbConfig = require('../config/postgresDb.config');

const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    database: 'xp',
    port: 5432
});

exports.list = (req, resp) => {
    console.log('Get all users');

    pool.query('select * from first_table order by id desc', (err, res) => {
        if(err) throw err;
        resp.status(200).json(res.rows);
    });

    // const result = {'name': 'aname', 'role': 'arole'};
    // res.status(200).send(result);
};

const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    //host: "url"
    //password: "url password"
    database: "films",
    password: 'Ross Boss',
    port: 5432,

});

module.exports = pool;
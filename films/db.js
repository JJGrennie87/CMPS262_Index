const Pool = require("pg").Pool;

const pool = new Pool({
    user: "jjgrenninger",
    password: "816BBHkJd2wVw6bgfpPTCAoh0Dnq4smR",
    host: 'dpg-cvg2d48gph6c73bgckp0-a',
    database: "films_25qv",
    port: 5432,

});

module.exports = pool;

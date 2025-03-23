const pool = require('../../db');
const queries = require('./queries');

//Get All Data
const getFilms = (req, res) => {
    pool.query(queries.getFilms, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

//GET Data by Param
//Add New Data Param
//Modify Data by Param
module.exports = {
    getFilms,
};
// import db from "./models/index";
// import Search from "./models/search";

const { Op } = require('sequelize');
const Search = require('./models/search');
const db = require('./models/index');

async function findRecord(searchTerm) {
    return await db.Search.findOne({
        where: {
            searchTerm,
            // createdAt :{
            //     [Op.gt]: new Date(new Date() - 2 * 60 * 1000) // two minutes ago
            // }
        },
        raw: true
    })
}

async function createRecord(searchTerm, results) {
    return await db.Search.create({
        searchTerm,
        results
    })
}

module.exports = { findRecord, createRecord };
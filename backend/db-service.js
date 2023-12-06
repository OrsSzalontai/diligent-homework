
const Search = require('./models/search');
const db = require('./models/index');
const sequelize = require('sequelize');

async function findRecord(searchTerm, pageNumber) {
    return await db.Search.findOne({
        where: {
            searchTerm,
            pageNumber
        },
        raw: true
    })
}

async function updateRecord(searchTerm, pageNumber) {
    return await db.Search.update(
        { cache_hit: sequelize.literal('cache_hit + 1') },
        {
            where: {
                searchTerm,
                pageNumber
            },
            returning: true
        })
}


async function createRecord(searchTerm, results, pageNumber) {
    return await db.Search.create({
        searchTerm,
        results: results,
        pageNumber,
        cache_hit: 0
    })
}

async function deleteRecord(searchTerm, pageNumber) {
    return await db.Search.destroy({
        where: {
            searchTerm,
            pageNumber

        }
    })
}

module.exports = { findRecord, updateRecord, createRecord, deleteRecord };
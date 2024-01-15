const fetch = require('node-fetch');

async function fetchDataFromAPI(searchTerm, pageNumber) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=${pageNumber}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.API_READ_ACCES_TOKEN}`
        }
    };
    try {
        const res = await fetch(url, options);
        return res.json()
    } catch (error) {
        throw error;
    }
}

module.exports = fetchDataFromAPI;
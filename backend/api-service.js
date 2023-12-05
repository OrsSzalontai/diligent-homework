const fetch = require('node-fetch');

async function fetchDataFromAPI(searchTerm) {
    // const url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US`;
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         accept: 'application/json',
    //         Authorization: `Bearer ${process.env.API_READ_ACCES_TOKEN}`
    //     }
    // };

    // const res = await fetch(url, options);
    // return res.json()
}

module.exports = fetchDataFromAPI;

const { findRecord, createRecord} = require('./db-service');
const fetchDataFromAPI = require('./api-service');

async function getSearchResults(searchTerm){
    const databaseResult = await findRecord(searchTerm);

    if (databaseResult && databaseResult?.results?.length > 0) {
        return { data: databaseResult.results, isResultFromDB: true}
    } else {
        const dataFromApi = await fetchDataFromAPI(searchTerm);
        await createRecord(searchTerm, dataFromApi?.results)
        return {data: dataFromApi?.results, isResultFromDB: false}
    }

}

module.exports = getSearchResults;

const { findRecord, updateRecord, createRecord, deleteRecord } = require('./db-service');
const fetchDataFromAPI = require('./api-service');

const twoMinutesAgo = new Date(new Date() - 2 * 60 * 1000); // two minutes ago;

async function getSearchResults(searchTerm, pageNumber) {
    const databaseResult = await findRecord(searchTerm, pageNumber);

    if (databaseResult?.updatedAt >= twoMinutesAgo) {

        const updatedRecord = await updateRecord(searchTerm, pageNumber);
        return { data: updatedRecord[1][0].dataValues, isResultFromDB: true };

    } else {
        if (databaseResult?.updatedAt <= twoMinutesAgo) {
            await deleteRecord(searchTerm, pageNumber);
        }

        const dataFromApi = await fetchDataFromAPI(searchTerm, pageNumber);
        
        if(!!dataFromApi?.status_message && !dataFromApi.success) {
            throw new Error(dataFromApi.status_message)
        }

        const createdRecord = await createRecord(searchTerm, dataFromApi, pageNumber);
        return { data: createdRecord, isResultFromDB: false };
    }

}

module.exports = getSearchResults;
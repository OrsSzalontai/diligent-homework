import { useState, useEffect } from 'react';
import axios from 'axios';

const useDataFetching = (searchValue,pageNumber) => {
    const [responseState, setResponseState] = useState({
        data: [],
        isLoading: false,
        error: null,
        statusCode: 0,
        statusText: '',
        cacheHitCount: 0,
        isResultFromDB: false
    });

    const updateState = (newState) => {
        setResponseState(prevState => ({
          ...prevState,
          ...newState
        }));
      };

    useEffect(() => {
        if (searchValue !== '') {
                (async () => {
                updateState({ isLoading: true, error: null });
                try {
                    const response = await axios.get(`http://localhost:5000/api/data?search=${searchValue}&pageNumber=${pageNumber}`);
                    updateState({ 
                        data: response.data.data.results,
                        error: null,
                        isLoading: false,
                        statusCode: response.status,
                        statusText: response.statusText,
                        cacheHitCount: response.data.data.cache_hit,
                        isResultFromDB:response.data.isResultFromDB,
                     });
                } catch (error) {
                    console.log(error)
                    updateState({ 
                        error,
                        isLoading: false,
                        statusCode: error.status,
                        statusText: error.statusText
                    })
                } finally {
                    updateState({ isLoading: false})
                }
            })();
        }

    }, [searchValue, pageNumber]);

    return { ...responseState };
};

export default useDataFetching;
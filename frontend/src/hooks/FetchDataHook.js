import { useState, useEffect } from 'react';
import axios from 'axios';

const useDataFetching = (searchValue) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [statusCode, setStatusCode] = useState(0);
    const [statusText, setStatusText] = useState('')
    const [cacheHitCount, setCacheHitCount] = useState(0)
    const [isResultFromDB, setIsResultFromDB] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            if (searchValue !== '') {
                try {
                    const response = await axios.get(`http://localhost:5000/api/data?search=${searchValue}`);
                    setData(response.data.data);
                    setIsLoading(false);
                    setStatusCode(response.status)
                    setStatusText(response.statusText)
                    setCacheHitCount(response.data.cacheHitCount)
                    setIsResultFromDB(response.data.isResultFromDB)
                } catch (error) {
                    setError(error);
                    setIsLoading(false);
                    setStatusCode(error.status)
                    setStatusText(error.statusText)
                }
            } else {
                setIsLoading(false)
            };
        }
        fetchData();

    }, [searchValue]);

    return { data, error, statusCode, statusText, cacheHitCount, isResultFromDB, isLoading };
};

export default useDataFetching;
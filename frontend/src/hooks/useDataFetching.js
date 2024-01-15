import { useQuery } from 'react-query';
import axios from 'axios';

const handleResponse = (response) => {

  if (!!response.response?.data?.error) {
    // error handling
    return {
      allData: null,
      isLoading: false,
      cacheHit: 0,
      error: response.response.data.error,
      statusCode: response.response.status,
      statusText: response.response.statusText,
      isResultFromDB: null
    }
  } else {
    // happy path
    return {
      allData: {
        movieData: response.data.data.results.results,
        pageInfo: {
          totalPages:  response.data.data.results.total_pages,
          totalResults: response.data.data.results.total_results
        }
      },
      isLoading:false,
      cacheHit: response.data.data.cache_hit,
      error: null,
      statusCode: response.status,
      statusText: response.statusText,
      isResultFromDB: response.data.isResultFromDB,
    }
  }
}


const fetchData = async ({ queryKey }) => {
  // eslint-disable-next-line
  const [data, searchValue, pageNumber] = queryKey;

  try {
    const response = await axios.get(`http://localhost:5000/api/data?search=${searchValue}&pageNumber=${pageNumber}`);
    return handleResponse(response);
  } catch (error) {
    return handleResponse(error);
  }
};

const useDataFetching = (searchValue, pageNumber) => {
  return useQuery(['data', searchValue, pageNumber], fetchData, {
    enabled: searchValue !== '',
    retry: 0,
    refetchOnWindowFocus: false,
  });
};

export default useDataFetching;
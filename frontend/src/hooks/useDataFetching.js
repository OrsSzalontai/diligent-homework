import { useQuery } from 'react-query';
import axios from 'axios';


const fetchData = async ({ queryKey }) => {
  const [data,searchValue, pageNumber] = queryKey;
  const response = await axios.get(`http://localhost:5000/api/data?search=${searchValue}&pageNumber=${pageNumber}`);
  return {...response.data.data, isResultFromDB: response.data.isResultFromDB};
};

const useDataFetching = (searchValue, pageNumber) => {
  return useQuery(['data', searchValue, pageNumber], fetchData, {
    enabled: searchValue !== '',
    retry: 0,
    refetchOnWindowFocus: false,
  });
};

export default useDataFetching;
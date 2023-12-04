import './App.css';
import Header from './components/Header'
import SearchBar from './components/SearchBar';
import Body from './components/Body';
import React, { useEffect, useState } from 'react';
import useDataFetching from './hooks/FetchDataHook';
import Loading from './components/Loading';

function App() {
  const [searchValue, setSearchValue] = useState('');

  const onInputSumbit = (newValue) => {
    setSearchValue(newValue)
  }

  const apiHookResults = useDataFetching(searchValue);

  return (
    <div className="App">
      <Header />
      <SearchBar onInputSumbit={onInputSumbit} />
      {apiHookResults.isLoading
        ? <Loading />
        : <Body apiHookResults={apiHookResults}/>
      }
    </div>
  );
}

export default App;

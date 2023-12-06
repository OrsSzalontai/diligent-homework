import './App.css';
import Header from './components/Header'
import SearchBar from './components/SearchBar';
import Body from './components/Body';
import CacheHitCounter from './components/CacheHitCounter';
import React, { useState } from 'react';

export default function App() {
  const [searchValue, setSearchValue] = useState('');
  const [cacheHitCount, setCacheHitCount] = useState(0)
  
  const onInputSumbit = (newValue) => {
    setSearchValue(newValue)
  }
  
  const onCacheHitChanged = (newValue) => {
    setCacheHitCount(newValue)
  }
  
  return (
    <div className="App">
      <Header />
      <div className='search-bar-counter'>
        <SearchBar onInputSumbit={onInputSumbit} />
        <CacheHitCounter cacheHitCount={cacheHitCount} />
      </div>
         <Body searchValue={searchValue} onCacheHitChanged={onCacheHitChanged} />
    </div>
  );
}

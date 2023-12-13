import React, { useState, useEffect } from 'react';
import Card from './Card';
import Notification from './Notification';
import Paginator from './Paginator';
import Landing from './Landing';
import Loading from './Loading';
import useDataFetching from '../hooks/useDataFetching';


export default function Body({ searchValue, onCacheHitChanged }) {
  const [cards, setCards] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  
  const onPageNumberChanged = (newPageNumber) => {
    setPageNumber(newPageNumber);
  };

  const { data, isLoading, error, statusCode, statusText, cacheHitCount, isResultFromDB } = useDataFetching(searchValue,pageNumber)

  const notificationProps = { error, statusCode, statusText, isResultFromDB };

  useEffect(() => {
    onCacheHitChanged(cacheHitCount)
  }, [cacheHitCount, onCacheHitChanged])

  useEffect(() => {
    if (data && data?.results?.results?.length > 0) {
      setCards(data.results.results.map(item => {
        return (
          <Card
            key={item.id}
            {...item}

          />
        )
      }))
    }
  }, [data, pageNumber])


  return (
    <>
      {!!statusCode && <Notification notificationProps={notificationProps} />}
      {isLoading ? <Loading /> :
        <>
          {cards.length > 0
            ? <Paginator cards={cards} pageInfo={data?.results} onPageNumberChanged={onPageNumberChanged} />
            : <Landing />
          }
        </>
      }
    </>
  );
};


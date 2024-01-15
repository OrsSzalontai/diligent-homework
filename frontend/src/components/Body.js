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

  const { data } = useDataFetching(searchValue, pageNumber)
  const { allData, isLoading, cacheHit, error, statusCode, statusText, isResultFromDB } = { ...data }

  const onPageNumberChanged = (newPageNumber) => {
    setPageNumber(newPageNumber);
  };

  const notificationProps = { error, statusCode, statusText, isResultFromDB };

  useEffect(() => {
    onCacheHitChanged(cacheHit)
  }, [cacheHit, onCacheHitChanged])

  useEffect(() => {
    if (allData && allData?.movieData?.length > 0) {
      setCards(allData.movieData.map(item => {
        return (
          <Card
            key={item.id}
            {...item}

          />
        )
      }))
    }
  }, [allData, pageNumber])


  return (
    <>
      {!!statusCode && <Notification notificationProps={notificationProps} />}
      {isLoading ? <Loading /> :
        <>
          {cards.length > 0
            ? <Paginator
                cards={cards}
                pageInfo={allData?.pageInfo}
                onPageNumberChanged={onPageNumberChanged}
                pageNumber={pageNumber} />
            : <Landing />
          }
        </>
      }
    </>
  );
};


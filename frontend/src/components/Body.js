import React, {useState} from 'react';
import Card from './Card';
import Notification from './Notification';
import Paginator from './Paginator';
import Landing from './Landing';


export default function Body({apiHookResults}) {
  const [cards, setCards] = useState([])
  
  const { data, error, statusCode, statusText, isResultFromDB } = apiHookResults
  const notificationProps = { error, statusCode, statusText, isResultFromDB };

  React.useMemo(() => {
    if (data && data?.length > 0){
      setCards(data.map(item => {
        return (
          <Card
            key={item.id}
            {...item}
  
          />
        )
      }))
    }
  }, [data])

  return (
        <>
          {!!statusCode && <Notification notificationProps={notificationProps} />}
          {cards.length > 0
            ? <Paginator data={cards} />
            : <Landing />}
        </>
  );
};


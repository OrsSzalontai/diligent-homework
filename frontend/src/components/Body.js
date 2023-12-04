import React, {useState} from 'react';
import Card from './Card';
import Notification from './Notification';
import Paginator from './Paginator';
import Landing from './Landing';


export default function Body({apiHookResults}) {
  const [cards, setCards] = useState([])
  
  const { data, error, statusCode, statusText } = apiHookResults

  React.useEffect(() => {
    setCards(data.map(item => {
      return (
        <Card
          key={item.id}
          {...item}

        />
      )
    }))
  }, [data])

  return (
        <>
          {!!statusCode && <Notification error={error} statusCode={statusCode} statusText={statusText} />}
          {cards.length > 0
            ? <Paginator data={cards} />
            : <Landing />}
        </>
  );
};


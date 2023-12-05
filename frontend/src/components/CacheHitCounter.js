import React, { useState, useEffect } from 'react';

export default function CacheHitCounter({apiHookResults}) {
    const [cacheHitCount, setCacheHitCount] = useState(0);

    useEffect(() => {
        if (apiHookResults.isResultFromDB) {
            setCacheHitCount(prevCount => prevCount + 1);
        }
    }, [apiHookResults])

    return (
        <div className='counter'>
            <div className='counter-text'>Cache count: </div>
            <p className='counter-value'>{cacheHitCount}</p>
        </div>
    );

}
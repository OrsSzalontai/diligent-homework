import React from 'react';

export default function CacheHitCounter({cacheHitCount}) {
    return (
        <div className='counter'>
            <div className='counter-text'>Cache count: </div>
            <p className='counter-value'>{cacheHitCount || 0}</p>
        </div>
    );

}
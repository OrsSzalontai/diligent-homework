import React, { useState, useEffect } from 'react';


export default function Notification({ error, statusCode, statusText }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    let color = '';
    const statusCodeFirstNumber = Number(statusCode.toString().charAt(0))

    switch (statusCodeFirstNumber) {
        case 5:
            color = 'red';
            break;
        case 2:
            color = 'green';
            break;
        case 3:
            color = 'orange';
            break;
        default:
            color = 'Tomato';
            break;
    }

    return (
        <>
            {isVisible && <div className='notification'
                style={{
                    backgroundColor: color,
                }}
            >
                {`Code: ${statusCode} Result: ${error || statusText}`}
            </div>}
        </>
    );
};


import React, { useState, useEffect } from 'react';


export default function Notification({ notificationProps }) {
    const [isVisible, setIsVisible] = useState(true);

    const { error, statusCode, statusText, isResultFromDB } = notificationProps;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 10000);

        return () => clearTimeout(timer);
    }, [notificationProps]);

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
                {
                    `Code: ${statusCode} Result: ${error || statusText}
                    ${isResultFromDB != null
                        ? `Data from: ${isResultFromDB ? 'Database' : '3rd party API'}`
                        : ''
                    }`
                }
            </div>}
        </>
    );
};


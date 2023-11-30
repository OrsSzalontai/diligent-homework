import React, { useState } from 'react';

export default function SearchBar() {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted value:', inputValue);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <form className='search-bar' onSubmit={handleSubmit}>
            <input
                className='text-search'
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search for movies..."
            />
            <button className='submit-button' type="submit">Submit</button>
        </form>
    );
};


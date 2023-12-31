import React, { useState } from 'react';

export default function SearchBar({onInputSumbit}) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        onInputSumbit(inputValue.trim())
        setInputValue('')
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
            <button className='submit-button' type="submit" onSubmit={handleSubmit}>Submit</button>
        </form>
    );
};


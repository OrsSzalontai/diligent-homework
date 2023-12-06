import React, { useState, useEffect } from 'react';

export default function Paginator({ cards, pageInfo, onPageNumberChanged }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = process.env.PAGINATION_LIMIT || 20;

    const totalItems = pageInfo.total_results;
    const totalPages = pageInfo.total_pages;

    useEffect(()=> {
        onPageNumberChanged(currentPage)
    },[currentPage, onPageNumberChanged])

    const handleClick = (page) => {
        setCurrentPage(page);
    };

    const handleFirstPage = () => {
        setCurrentPage(1);
    };

    const handleLastPage = () => {
        setCurrentPage(totalPages);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const paginationItems = [];
    for (let i = 1; i <= totalPages; i++) {
        paginationItems.push(
            <button key={i} onClick={() => handleClick(i)}>
                {i}
            </button>
        );
    }

    return (
        <div>
            <section className="cards-list">
                {cards}
            </section>
            {totalItems > itemsPerPage && <div className="paginator">
                <button onClick={handleFirstPage}>Home</button>
                <button onClick={handlePrevPage}>Previous</button>
                {paginationItems}
                <button onClick={handleNextPage}>Next</button>
                <button onClick={handleLastPage}>End</button>
            </div>}
        </div>
    );
};


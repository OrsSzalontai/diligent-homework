import React, { useState, useEffect } from 'react';

export default function Paginator({ cards, pageInfo, onPageNumberChanged, pageNumber }) {

    const itemsPerPage = process.env.PAGINATION_LIMIT || 20;

    const totalItems = pageInfo.total_results;
    const totalPages = pageInfo.total_pages;


    const handleClick = (page) => {
        onPageNumberChanged(page);
    };

    const handleFirstPage = () => {
        onPageNumberChanged(1);
    };

    const handleLastPage = () => {
        onPageNumberChanged(totalPages);
    };

    const handlePrevPage = () => {
        if (pageNumber > 1) {
            onPageNumberChanged(pageNumber - 1);
        }
    };

    const handleNextPage = () => {
        if (pageNumber < totalPages) {
            onPageNumberChanged(pageNumber + 1);
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


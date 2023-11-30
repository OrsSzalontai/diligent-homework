import React, { useState } from 'react';

export default function Paginator({ data }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

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



    const renderData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentPageData = data.slice(startIndex, endIndex);
        return (
            <section className="cards-list">
                {currentPageData}
            </section>

        )
        return
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
            {renderData()}
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


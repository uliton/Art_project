import React, { useState } from 'react';

import './Paginate.scss'
import classNames from 'classnames';

interface PaginateProps {
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (pageNumber: number) => void;
    maxDisplayedPages: number;
}

const Paginate: React.FC<PaginateProps> = ({ totalItems, itemsPerPage, onPageChange, maxDisplayedPages }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            const newPage = currentPage - 1;
            setCurrentPage(newPage);
            onPageChange(newPage);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            const newPage = currentPage + 1;
            setCurrentPage(newPage);
            onPageChange(newPage);
        }
    };

    const handlePageClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        onPageChange(pageNumber);
    };

    const renderPageButtons = () => {
        const pageButtons = [];

        const startPage = Math.max(currentPage - Math.floor(maxDisplayedPages / 2), 1);
        const endPage = Math.min(startPage + maxDisplayedPages - 1, totalPages);

        for (let i = startPage; i <= endPage; i++) {
            pageButtons.push(
                <button
                    key={i}
                    onClick={() => handlePageClick(i)}
                    className={classNames(`pagination__page-button ${currentPage === i ? 'active' : ''}`)}
                >
                    {i}
                </button>
            );
        }

        return pageButtons;
    };

    return (
        <div className='pagination'>
            <div className="pagination__page-buttons-container">{renderPageButtons()}</div>
            <div className='pagination__prev-next-container'>
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className='pagination__page-button'
                >
                    <img src="/arrowIcon.svg" alt="prev" />
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className='pagination__page-button pagination__next-button'
                >
                    <img src="/arrowIcon.svg" alt="next" />
                </button>
            </div>
        </div>
    );
};

export default Paginate;

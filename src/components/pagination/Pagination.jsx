import React, { useRef } from 'react';
import "./pagination.css";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers = [];
    const scrollRef = useRef();

    for (let i=1; i<= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
  return (
    <nav className='container pageBrowser'>
        <ul className='pagination'>
            {pageNumbers.map(number => {
                return (
                    <li onClick={() => {paginate(number)}} key={number} className={currentPage === number ? "active" : ""}>
                        <button className='page-button' ref={scrollRef}>{number}</button>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default Pagination;

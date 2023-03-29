import ReactPaginate from 'react-paginate'
import Post from '../post/Post'
import React, { useEffect, useState } from 'react'
import "./posts.css"

export default function Posts({ posts }) {
    const [itemOffset, setItemOffset] = useState(0)
    const endOffset = itemOffset + 10
    const currentItems = posts.slice(itemOffset, endOffset)
    const pageCount = Math.ceil(posts.length / 10)
    const currentPage = Math.round(itemOffset / 10)

    useEffect(() => {
        setItemOffset(0);
    }, [posts])

    const handlePageClick = (event) => {
        const newOffset = (event.selected * 10) % posts.length;
        setItemOffset(newOffset);
    }

    return (
        <>
            <div className='posts'>
                {currentItems.map(post => {
                    return <Post key={post.id} post={post} />
                })}
                {(currentItems.length < 1) ? <p>"Post not Found"</p> : ""}
            </div>
            <div className='containerPagination'>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="previous"
                    renderOnZeroPageCount={null}
                    forcePage={currentPage}
                />
            </div>
        </>
    )
}

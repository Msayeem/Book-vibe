import React from 'react';
import BookCard from './BookCard';

const Readlist = ({storedBooks, sorting}) => {

    let sortedbooks=[...storedBooks]

if(sorting==='pages'){
    sortedbooks.sort((a, b)=>b.totalPages-a.totalPages)
}
if(sorting==='rating'){
    sortedbooks.sort((a, b)=>b.rating-a.rating)
}

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-3'>
            {
                storedBooks.length==0 ? <h2 className='text-3xl font-semibold pt-10'>No Books</h2>:
                sortedbooks.map(book=>
                    <BookCard key={book.bookId} book={book}></BookCard>
                )
            }
        </div>
    );
};

export default Readlist;
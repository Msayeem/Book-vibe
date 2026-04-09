import React from 'react';
import BookCard from './BookCard';

const Wishlist = ({wishBooks, sorting}) => {

let sortedBooks=[...wishBooks];

if(sorting==='pages'){
    sortedBooks.sort((a, b)=>b.totalPages-a.totalPages)
}
if(sorting==='rating'){
    sortedBooks.sort((a, b)=> b.rating-a.rating)
}

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-3'>
            {
                wishBooks.length==0 ?
                <h2 className='text-3xl font-semibold pt-10'>No Books</h2>
                :
                sortedBooks.map(book=>
                    <BookCard key={book.bookId} book={book}></BookCard>
                )
            }
        </div>
    );
};

export default Wishlist;
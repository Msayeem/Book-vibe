import React, { use } from 'react';
import { FaRegStar } from 'react-icons/fa';
import BookCard from './BookCard';

let fetch1=fetch('/booksData.json')
    .then(x=>x.json())

const AllBooks = () => {
    let books=use(fetch1);
  
    return (
       <div>
        <h2 className='font-bold text-2xl text-center pb-15'>Books</h2>
         <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-8 lg:w-[70%] w-[90%] mx-auto pb-10'>
            {
                books.map(book=>
                  <BookCard key={book.bookId} book={book}></BookCard>
                )
            }
        </div>
       </div>
    );
};

export default AllBooks;
import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCard = ({book}) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`}>
             <div className="hover:shadow-gray-400 transition-all shadow-xl shadow-gray-300 card bg-base-100 w-80 mx-auto shadow-sm">
  <figure className='py-2'>
    <img className='rounded-3xl h-80'
      src={book.image}
      alt={book.bookName} />
  </figure>
  

  
  <div className="card-body ">
    <div className='flex justify-between '>
        {
    book.tags.map((tag, index)=>
        <div key={index} className='badge badge-success text-amber-100 font-semibold'>
          {tag}
            </div>
    )
  }
</div>
    <h2 className="card-title">
      {book.bookName}
      
    </h2>
    <p className='font-semibold pb-2.5 border-dashed border-b border-gray-400'>By : {book.author}</p>
    <div className="card-actions justify-between ">
      <div className="badge badge-outline">{book.category}</div>
      <div className="badge badge-outline">{book.rating} <FaRegStar></FaRegStar></div>
    </div>
  </div>
</div>
        </Link>
    );
};

export default BookCard;
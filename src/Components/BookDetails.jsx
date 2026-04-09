import React, { use, useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BokContext } from './BookContext';
import { toast } from 'react-toastify';



const BookDetails = () => {
    const {id}=useParams();
    

let books=useLoaderData();

const expectedBook=books.find(book=> book.bookId==id);

  let { storedBooks, setStoredBooks, wishBooks, setWishBooks } = useContext(BokContext);

const handleRead = () => {
  if(wishBooks.some(book => book.bookId == expectedBook.bookId)){
    toast.error('Book exists in Wishlist');
    return;
  }
  if(storedBooks.some(book => book.bookId == expectedBook.bookId)){
    toast.error('Already in Read list');
    return;
  }
 setStoredBooks([...storedBooks, expectedBook]);
  toast.success(`'${expectedBook.bookName}' added to Read list`);
}

const handleWish = () => {
  if(storedBooks.some(book => book.bookId == expectedBook.bookId)){
    toast.error('Book exists in Read list');
    return;
  }
  if(wishBooks.some(book => book.bookId == expectedBook.bookId)){
    toast.error('Already in Wishlist');
    return;
  }
  setWishBooks([...wishBooks, expectedBook]);
  toast.success(`'${expectedBook.bookName}' added to Wishlist`);
}



    return (
        <div>
           
                    <div className="card lg:card-side bg-base-100 shadow-sm w-[80%] mx-auto lg:w-[90%]">
  <figure>
    <img
    className='w-[60%] h-[80%]'
      src={expectedBook.image}
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{expectedBook.bookName}</h2>
    <p>By : {expectedBook.author}</p>
    <hr />
    <p className='text-[16px] font-semibold'>{expectedBook.category}</p>
    <hr />
    <p>Review : {expectedBook.review}</p>

<div className='flex items-center gap-5'>
    <h2 className='text-18px font-bold'>Tag</h2>
    {
expectedBook.tags.map((tag, index)=>
<div key={index} className='text-green-500 font-bold text-[18px]'>
    #{tag}
</div>
)
    }
</div>
<hr />

<div className='flex items-center gap-8 '>
    <div className='space-y-2'>
        <p>Number of Pages:</p>
        <p>Publisher:</p>
        <p>Year of Publishing:</p>
        <p>Rating:</p>
    </div>

    <div className='space-y-2'>
        <p>{expectedBook.totalPages}</p>
        <p>{expectedBook.publisher}</p>
        <p>{expectedBook.yearOfPublishing}</p>
        <p>{expectedBook.rating}</p>
    </div>
</div>

    <div className="card-actions justify-end">
      <button className="btn" onClick={handleRead}>Read</button>
      <button onClick={handleWish} className="btn btn-accent">Wishlist</button>
    </div>
  </div>
</div>
               
        </div>
    );
};

export default BookDetails;
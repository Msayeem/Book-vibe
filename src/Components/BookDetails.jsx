import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BokContext } from './BookContext';
import { toast } from 'react-toastify';

const BookDetails = () => {
  const { id } = useParams();
  const books = useLoaderData();
  const expectedBook = books.find(book => book.bookId == id);
  const { storedBooks, setStoredBooks, wishBooks, setWishBooks } = useContext(BokContext);

  const handleRead = () => {
    if (wishBooks.some(book => book.bookId == expectedBook.bookId)) {
      toast.error('Book exists in Wishlist');
      return;
    }
    if (storedBooks.some(book => book.bookId == expectedBook.bookId)) {
      toast.error('Already in Read list');
      return;
    }
    setStoredBooks([...storedBooks, expectedBook]);
    toast.success(`'${expectedBook.bookName}' added to Read list`);
  };

  const handleWish = () => {
    if (storedBooks.some(book => book.bookId == expectedBook.bookId)) {
      toast.error('Book exists in Read list');
      return;
    }
    if (wishBooks.some(book => book.bookId == expectedBook.bookId)) {
      toast.error('Already in Wishlist');
      return;
    }
    setWishBooks([...wishBooks, expectedBook]);
    toast.success(`'${expectedBook.bookName}' added to Wishlist`);
  };

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-6 bg-base-100 shadow-md rounded-xl overflow-hidden">

        {/* Book Cover */}
        <figure className="w-full lg:w-72 xl:w-80 shrink-0 bg-base-200 flex items-center justify-center p-6">
          <img
            src={expectedBook.image}
            alt={expectedBook.bookName}
            className="w-full max-w-[220px] lg:max-w-full object-cover rounded-lg shadow"
          />
        </figure>

        {/* Book Info */}
        <div className="flex flex-col gap-4 p-6 flex-1">
          <h2 className="text-2xl font-bold">{expectedBook.bookName}</h2>
          <p className="text-base text-base-content/70">By: <span className="font-medium text-base-content">{expectedBook.author}</span></p>

          <hr className="border-base-300" />

          <p className="text-sm font-semibold uppercase tracking-wide text-primary">{expectedBook.category}</p>

          <hr className="border-base-300" />

          <p className="text-sm text-base-content/80 leading-relaxed">
            <span className="font-semibold text-base-content">Review: </span>{expectedBook.review}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold">Tags:</span>
            {expectedBook.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-green-50 text-green-600 text-xs font-semibold px-3 py-1 rounded-full border border-green-200"
              >
                #{tag}
              </span>
            ))}
          </div>

          <hr className="border-base-300" />

          {/* Meta Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Pages', value: expectedBook.totalPages },
              { label: 'Publisher', value: expectedBook.publisher },
              { label: 'Year', value: expectedBook.yearOfPublishing },
              { label: 'Rating', value: `${expectedBook.rating} ★` },
            ].map(({ label, value }) => (
              <div key={label} className="bg-base-200 rounded-lg p-3 flex flex-col gap-1">
                <span className="text-xs text-base-content/60 font-medium uppercase tracking-wide">{label}</span>
                <span className="text-sm font-semibold">{value}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2 mt-auto">
            <button
              className="btn btn-outline flex-1 sm:flex-none"
              onClick={handleRead}
            >
              Mark as Read
            </button>
            <button
              className="btn btn-accent flex-1 sm:flex-none"
              onClick={handleWish}
            >
              Add to Wishlist
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BookDetails;
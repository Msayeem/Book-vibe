import React from 'react';
import i1 from '../../assets/hero_img.jpg'
import AllBooks from './AllBooks';

const Home = () => {
    return (
        <div>
           
           <div className="hero bg-base-200 min-h-[calc(100vh-80px)] rounded-3xl lg:p-20">
  <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-20">
    
    {/* Image Container: Ensuring the image scales down on small screens */}
    <div className="flex justify-center flex-1">
        <img
          src={i1}
          className="max-w-[250px] md:max-w-sm rounded-lg shadow-2xl transition-transform hover:scale-105 duration-300"
          alt="Book cover"
        />
    </div>

    {/* Text Content */}
    <div className="flex-1 text-center lg:text-left">
      {/* Changed fixed width w-[500px] to max-w-xl for responsiveness */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-xl">
        Books to freshen up your bookshelf
      </h1>
      
      <p className="py-6 text-gray-600 text-lg max-w-md mx-auto lg:mx-0">
        Discover your next great read from our curated selection of trending and classic titles.
      </p>

      <button className="btn btn-success text-white px-8 font-bold text-lg hover:shadow-lg transition-all">
        View The List
      </button>
    </div>

  </div>
</div>

<AllBooks></AllBooks>
        </div>
    );
};

export default Home;
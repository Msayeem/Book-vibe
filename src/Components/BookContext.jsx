import React, { createContext, useState } from 'react';

export const BokContext=createContext();

const BookContext = ({children}) => {

 let [storedBooks, setStoredBooks]=useState([]);
 let [wishBooks, setWishBooks]=useState([]);



    return <BokContext.Provider value={{storedBooks, setStoredBooks, wishBooks, setWishBooks}}>
        {children}
    </BokContext.Provider>
};

export default BookContext;
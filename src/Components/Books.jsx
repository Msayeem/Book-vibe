import React, { useContext, useState } from 'react';
import { BokContext } from './BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Readlist from './Readlist';
import Wishlist from './Wishlist';

const Books = () => {
    let {storedBooks, setStoredBooks, wishBooks, setWishBooks}=useContext(BokContext);
   
let [sorting, setSorting]=useState('')

    return (
        <div className='w-[90%] mx-auto'>

<div className="dropdown dropdown-start flex justify-end ">
  <div tabIndex={0} role="button" className="btn m-1">Sort ⬇️</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={(()=>setSorting('pages'))}><a>Pages</a></li>
    <li onClick={()=>setSorting('rating')}><a>Rating</a></li>
  </ul>
</div>

             <Tabs>
    <TabList>
     <Tab>Read List</Tab>
     <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
     <Readlist storedBooks={storedBooks} sorting={sorting}></Readlist>
    </TabPanel>
    <TabPanel>
      <Wishlist wishBooks={wishBooks} sorting={sorting}></Wishlist>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Books;
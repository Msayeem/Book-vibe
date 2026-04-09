import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root.jsx';
import Books from './Components/Books.jsx';
import Home from './Components/Home.jsx';
import BookDetails from './Components/BookDetails.jsx';
import BookContext from './Components/BookContext.jsx';
import { ToastContainer } from 'react-toastify';

const router=createBrowserRouter([

{path:'/',
  Component:Root,
children:[
 {
index:true,
Component:Home
 },

  {
    path:'/books',
    element:<Books></Books>
  },
  {
    path:'/bookDetails/:id',
    loader:()=>fetch('/booksData.json'),
    Component:BookDetails
  }


],
errorElement:<h1 className='text-center font-semibold text-3xl'>Page not found</h1>
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<BookContext>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
</BookContext>
  </StrictMode>,
)

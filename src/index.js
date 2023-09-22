import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Home } from './views/home/Home'
import { Characters } from './views/characters/Characters';
import { Contact } from './views/contact/Contact'

// ROUTER
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// CREATE PATHS OF EACH ROUTE
const router = createBrowserRouter([
  {path: "/" ,
   element: <Home/> 
  }
    ,
  {path: "/characters" ,
   element: <Characters/>
  } ,
  {path: "/contact" ,
   element: <Contact/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

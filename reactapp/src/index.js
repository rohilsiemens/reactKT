import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Page1 from './Component/Page1';
import Page2 from './Component/Page2';
import { Error } from './Component/Error';
import { Body } from './Component/Body';


const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/page1",
        element:<Page1/> 
      },
      {
        path:"/page2",
        element:<Page2/> 
      }
    ]

  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider
    App router={appRouter}
/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//crteateBrowsertRouter
//routerProvider
//Outlet



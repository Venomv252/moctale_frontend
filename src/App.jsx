import { useState } from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Landing from './pages/Landing/Landing.jsx';
import Login from './pages/Login/Login.jsx';

function App() {

  const router = createBrowserRouter([

    {path:"/",
     element: <> <Landing /></>
     
    },{
      path:"/login",
      element:<><Login/></>
    }
  ])
  

  return (
    <>
    <RouterProvider router= {router} />
      
    </>
  )
}

export default App

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider , createBrowserRouter } from 'react-router-dom';
import Login from './components/login/login';
import Register from './components/register/register';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Login/>
  },
  {
    path : '/register',
    element : <Register/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);



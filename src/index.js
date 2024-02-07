import React from 'react';
// import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Router from './asset/Router';
import Redux from './asset/Redux';
import Toolkit from './asset/Toolkit';
import Select from './asset/Select';
import Bootstrap from './asset/Bootstrap';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/react-router-dom",
        element: <Router />
    },
    {
        path: "/react-redux",
        element: <Redux />
    }, 
    {
        path: "/redux-toolkit",
        element: <Toolkit />
    },
    {
        path: "/react-select",
        element: <Select />
    },
    {
        path: "/react-bootstrap",
        element: <Bootstrap />
    }
])

const container = document.getElementById('root');
render(<RouterProvider router={router} />, container);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

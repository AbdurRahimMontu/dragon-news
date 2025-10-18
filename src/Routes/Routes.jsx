import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../Components/Home';
import CategoryNews from '../Components/CategoryNews';
import NewsDetails from '../Components/NewsDetails';

const Routes = createBrowserRouter([
    {
        path:"/", 
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/category/:id",
                element:<CategoryNews></CategoryNews>,
                hydrateFallbackElement:<span>Loading.....</span>,
                loader:()=>fetch('/news.json'),
            }
        ]
    },
    {
        path:"/auth", 
        element: <h2>Auth Layout</h2>
    },
    {
        path:"/news-details/:id", 
        element: <NewsDetails></NewsDetails>,
        hydrateFallbackElement:<span>Loading.....</span>,
        loader:()=>fetch('/news.json'),
    },

    {
        path:"*", 
        element: <h2>Error Layout</h2>
    },
])

export default Routes;
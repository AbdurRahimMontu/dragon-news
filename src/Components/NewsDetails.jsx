// import React, { useEffect, useState } from 'react';
import SocialLogin from './SocialLogin';
import Navbar from './Navbar';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from './NewsDetailsCard';
import { useEffect, useState } from 'react';

const NewsDetails = () => {
    const data = useLoaderData();
     const {id} = useParams();
     const [news, setNews] =useState({})
 
console.log (news , data, id);


useEffect(()=>{

      const newsDetailsData = data.find((singleNews) => singleNews.id ==id);
    setNews(newsDetailsData)
       
    },[data, id])

    return (
        <div >
            <header>
                <Navbar></Navbar>
            </header>
           <div className='grid grid-cols-12 w-11/12 gap-10 mx-auto'>
            <div className='col-span-9'>
                
                 <NewsDetailsCard news={news}></NewsDetailsCard>
                
            </div>
            <div className='col-span-3'>
                <SocialLogin></SocialLogin>
            </div>
           </div>
        </div>

    );
};

export default NewsDetails;
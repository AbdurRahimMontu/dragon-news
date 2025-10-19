import React from 'react';
import { FaStar } from 'react-icons/fa';

const NewsDetailsCard = ({news}) => {
const {rating,image_url,title}=news;

    return (
        <div>
            news details card
            <h2>{title}</h2>
 
  
  <div className="flex items-center gap-2 text-yellow-500">
    {Array.from({ length: rating?.number }).map((_, i) => (<FaStar key={i} />))}
        <span className="text-gray-700 font-medium">{rating?.number}</span>
    </div>




            <img className='w-full' src={image_url} alt="" />
         





        </div>
    );
};

export default NewsDetailsCard;

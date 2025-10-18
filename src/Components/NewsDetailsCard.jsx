import React from 'react';

const NewsDetailsCard = ({news}) => {
  
    return (
        <div>
            news details card
            <h2>
                {news.title}
            </h2>
            <img className='w-full' src={news.image_url} alt="" />
        </div>
    );
};

export default NewsDetailsCard;
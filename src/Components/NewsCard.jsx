import React from 'react';
import { Link} from 'react-router';

const NewsCard = ({news}) => {
   
    const {title, id, image_url, rating} = news;
    const handleChange =()=>{

    }
    return (
        <div>
            <h2>{title}</h2>
            <h2>{rating.number}</h2>
            <img src={image_url} alt="" />
            <Link to={`/news-details/${id}`} onClick={handleChange} className='btn'>Details</Link>
        </div>
    );
};

export default NewsCard;
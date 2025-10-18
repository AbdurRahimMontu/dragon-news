import React from 'react';
import { Link} from 'react-router';

const NewsCard = ({news}) => {
   
    const {title, id, image_url} = news;
    const handleChange =()=>{

    }
    return (
        <div>
            <h2>{title}</h2>
            <img src={image_url} alt="" />
            <Link to={`/news-details/${id}`} onClick={handleChange} className='btn'>Details</Link>
        </div>
    );
};

export default NewsCard;
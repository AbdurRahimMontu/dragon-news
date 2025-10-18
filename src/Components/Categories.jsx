
import React, { use } from 'react';
import { NavLink } from 'react-router';


const promise = fetch('/categories.json').then(res=>res.json())

const Categories = () => {
    const categories = use(promise)
   
    return (
        <div>
             <h2>All Categories ({categories.length})</h2>
          <div className='grid grid-cols-1 gap-1'>
              {
                categories.map(category=> 
                <NavLink to={`/category/${category.id}`} key={category.id} className='btn bg-base-100'>{category.name}</NavLink>)
            }
          </div>
        </div>
    );
};

export default Categories;
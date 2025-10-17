import React from 'react';
import Marquee from 'react-fast-marquee';

const Marque = () => {
    return (
        <div className=' py-2 bg-base-300 '>
            <div className='flex items-center gap-5 w-11/12 mx-auto'>
                <h3 className='text-xl bg-secondary px-3 py-2 text-white font-semibold'>Latest</h3>
            <p className="cursor-pointer"><Marquee pauseOnHover={true} speed={50} gradient={false}>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis suscipit, nihil similique laboriosam, ratione accusamus hic iusto sed, officiis corrupti nostrum nam repellendus cumque non totam laborum? Sunt, voluptatem eligendi?
    </Marquee></p>
            </div>
        </div>
    );
};

export default Marque;
import React from 'react';

const Heading = ({ subTitle, title, content, pe, center, max }) => {
    return (
        <div className={`${center ? 'text-center' : ''} ${max ? 'max-w-2xl mx-auto ' : ' '}`}>
            <h3 className='font-bold text-xl text-[#FF3811] pb-3'>{subTitle}</h3>
            <h1 className='font-bold md:text-4xl xl:text-5xl leading-tight'>{title}</h1>
            <h1 className={` text-[#737373]  text-base leading-7 mt-3 ${pe}`}>{content}</h1>
        </div>
    );
};

export default Heading;
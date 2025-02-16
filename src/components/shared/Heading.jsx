import React from 'react';

const Heading = ({ subTitle, title, content, pe }) => {
    return (
        <div>
            <h3 className='font-bold text-xl text-[#FF3811] pb-5'>{subTitle}</h3>
            <h1 className='font-bold text-5xl leading-tight'>{title}</h1>
            <h1 className={`font-semibold text-[#737373]  text-base leading-7 mt-7 ${pe}`}>{content}</h1>
        </div>
    );
};

export default Heading;
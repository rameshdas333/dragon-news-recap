import React from 'react';

const Container = ({children}) => {
    return (
        <div className='w-[1140px] mx-auto'>


            {children}
        </div>
    );
};

export default Container;
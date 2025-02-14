import React from 'react';

const Copyright = () => {
    return (
        <div className='container mx-auto'>
            <p className='text-center'>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
    );
};

export default Copyright;
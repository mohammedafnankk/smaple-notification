import React from 'react';

const TestLocalS = () => {
    const ids = localStorage.getItem("ids")
    console.log(ids,"idds");
    
    return (
        <div className=''>
            <button className='bg-green-700 text-white px-2 py-1 mr-3 ' onClick={()=>localStorage.setItem("ids",1)}>Button 1</button>
            <button className='bg-green-700 text-white px-2 py-1 mr-3 ' onClick={()=>localStorage.setItem("ids",2)}>Button 2</button>
        </div>
    );
}

export default TestLocalS;

import React, { useState } from 'react'

const nav = () => {

    const [mobileView,setMobileView] = useState(false);

  return (
    <div className='bg-[white] border w-full h-[4rem] top-0 z-2 fixed md:px-20 px-5 flex justify-between items-center'>
        <div>
            <h1 className='bold uppercase'>logo </h1>
        </div>
        <div className='hidden gap-16 md:flex '>
            <a href='#'>Home</a>
            <a href='#'>Achievements</a>
            <a href='#'>Rankings</a>
        </div>
    </div>
  )
}

export default nav
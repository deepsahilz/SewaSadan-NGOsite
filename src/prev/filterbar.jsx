import React from 'react'

const filterbar = () => {
  return (
    <div className='mx-10 pt-5 '>
        <div className='flex items-center gap-10 w-full'>
            <div className="hidden lg:block bg-stone-100 border border-stone-300 px-4 py-2 rounded-md">
              <img className='w-20 h-5' src="./src/assets/filter.svg"/> 
            </div>
            <div className="w-full ">
                <input className='bg-stone-200 w-full  border border-stone-200 px-4 py-2 rounded-md' placeholder='Search'></input>
            </div>
            <div className="bg-stone-100 w-auto hidden lg:block border rounded-md border-stone-300 px-4 py-1">
            <img className='w-6 h-7 ' src="./src/assets/sort.svg"/> 
            </div>
        </div>
    </div>
  )
}

export default filterbar
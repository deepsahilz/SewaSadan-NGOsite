import React from 'react'

const hero2 = () => {
  return (
    <div className='bg-orange-700 relative mt-16 h-[92vh] overflow-hidden '>
        
            
                <div className='bg-stone-900 opacity-60 absolute h-full w-full'></div>
                
                <div className='w-full absolute text-center md:text-start  bottom-0 pb-[4rem] font-nb px-5 md:px-20  '>
                  <h4 className='italic text-zinc-200'>former name</h4>
                  <div className='text-white font-bold text-2xl md:text-5xl mb-5'>
                    <h1 style={{textShadow:'2px 3px 4px rgba(0,0,0,0.5)'}} className=' tracking-tight '>SHRI  GURU<br/> NANAK  DEV SAHIB JI</h1>
                    <h1  className='bg-orange-500 inline-block text-[2rem] md:text-[3.4rem] leading-none mt-2 md:px-4 px-2 py-1 rounded-md'>SAMAJ SEWA SANSTHA</h1>
                  </div>

                  <div className='text-white'>
                    <p className='md:w-[25rem] w-[90vw]'>this is a dummy text that will be suitably replaced once i got to know what this charitable organisation do.</p>
                  </div>

                </div>
                
                <div className='flex justify-center items-end w-full h-full'>
                  <img className='w-full object-cover h-full ' src='./src/assets/images/sewasadan.jpg'/>
                </div>
          

    </div>
  )
}

export default hero2
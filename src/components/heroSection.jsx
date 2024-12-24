import React from 'react';

const HeroSection = () => {
  return (
    <div className='bg-zinc-100 h-[95vh] pt-20 overflow-hidden'>
      
            <div className='w-full z-20 absolute  text-center  pb-[4rem] font-nb mt-[15rem] md:mt-[10rem] px-5 md:px-20  '>
                 
                  <div className='text-zinc-800  leading-[3rem] font-bold text-4xl md:text-[3rem] mb-5'>
                    <h1 className=' '>SHRI  GURU NANAK  DEV SAHIB JI<br/>SAMAJ SEWA SANSTHA</h1>
                  </div>

                  <div className='text-zinc-700 w-full flex justify-center'>
                    <p className='md:w-[25rem] text-center w-[90vw]'>this is a dummy text that will be suitably replaced once i got to know what this charitable organisation do.</p>
                  </div>

            </div>

            {/* <div style={{background: 'radial-gradient(circle, #1e3a8a 1%,#f4f4f5 80%)',}} className='absolute bottom-0 m-10  h-[25rem] w-[25rem]'></div> */}
               
    </div>
  );
};

export default HeroSection;

import React from 'react'
import dp from '../assets/images/dp6.png'

const poll = () => {
    const memberdata = [
        {name:"harjinder singh", des:"chairman",imgsrc:"#" },
        {name:"manjit singh", des:"comittee member",imgsrc:"#" },
        {name:"sujinder singh", des:"mla",imgsrc:"#" },
        {name:"harwinder singh", des:"mp",imgsrc:"#" },
        {name:"harsh sandhu", des:"vice president",imgsrc:"#" },
        {name:"angrej singh", des:"vc",imgsrc:"#" },
    ]
  return (    
    <div className='mx-5 md:mx-20 pt-6'>
    <h1 className='text-center mt-10 text-5xl font-rejouice'>OUR TRUSTEES</h1>

    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-y-10 gap-y-5 mt-10 gap-x-10 '>
        
        {memberdata.map((member,i)=>(
            <div key={i} className='border cursor-pointer hover:bg-zinc-300 hover:border-zinc-500 rounded-md bg-zinc-200 px-5 py-5 flex justify-center items-center gap-6'>
                <div className='overflow-hidden w-[8rem] h-[8rem] min-w-[8rem] min-h-[8rem] rounded-full bg-zinc-500'>
                    {/* <img className='w-full h-full object-cover' src={member.imgsrc} /> */}
                    <img className='w-full h-full object-cover' src={dp}/>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-2xl capitalize text-wrap'>{member.name}</h1>
                    <h1 className='uppercase text-zinc-500'>{member.des}</h1>
                </div>
            </div>
            
        ))}
    

    </div>

    </div>
  )
}

export default poll
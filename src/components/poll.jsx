import React, { useState } from 'react'
import dp from '../assets/images/dp6.png'

const Poll = () => { 

    const[like,setLike]= useState(0);
    

    const memberdata = [
        {name:"harjinder singh", des:"chairman",imgsrc:"#" },
        {name:"manjit singh", des:"comittee member",imgsrc:"#" },
        {name:"sujinder singh", des:"mla",imgsrc:"#" },
        {name:"harwinder singh", des:"mp",imgsrc:"#" },
        {name:"harsh sandhu", des:"vice president",imgsrc:"#" },
        {name:"angrej singh", des:"vc",imgsrc:"#" },
    ]
  return (    
    <div className='px-5 md:px-20 pt-6 bg-zinc-100 border-b pb-20'>
    <h1 className='text-center mt-10 md:text-5xl text-3xl font-rejouice'>OUR TRUSTEES</h1>

    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-y-10 gap-y-5 mt-10 gap-x-10 mb-20 '>
        
        {memberdata.map((member,i)=>(
            <div key={i} className='w-full border-[1.5px] cursor-pointer transition-colors hover:bg-zinc-100 shadow-lg hover:border-zinc-400 rounded-[12px] bg-white px-5 py-5 flex justify-center items-center gap-5'>
                
                <div className='overflow-hidden aspect-square w-[8rem] rounded-full bg-zinc-500'>
                    <img className='w-full h-full object-cover' src={dp}/>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-xl font-semibold capitalize text-wrap text-zinc-800'>{member.name}</h1>
                    <h1 className='capitalize text-zinc-500'>{member.des}</h1>
                    <div className='flex gap-5'>
                        <div className='flex gap-1'>
                            {like && <h1>{like}</h1>}
                            <button className='hover:bg-zinc-700 rounded-full px-2 bg-zinc-400' onClick={()=>{setLike(1)}}>L</button>
                        </div>
                        <div className='flex gap-1'>
                            <div>{like}</div>
                            <button className='hover:bg-zinc-700 px-2 rounded-full bg-zinc-400' onClick={()=>{setLike(0)}}>D</button>
                        </div>
                    </div>
                </div>
            </div>
            
        ))}
    

    </div>

    </div>
  )
}

export default Poll
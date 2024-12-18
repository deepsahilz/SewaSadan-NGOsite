import React, { useState } from 'react'
import Buttonx from './buttonx'
import { Link } from 'react-router-dom';


const flexdata =[
    {image:"./src/assets/screen(5).png",
     text:"hey"},
    {image:"./src/assets/screen(6).png",
     text:"hey"},
    {image:"./src/assets/screen(1).png",
     text:"hey"},
    {image:"./src/assets/screen(4).png",
     text:"hey"},
    {image:"./src/assets/screen(2).png",
     text:"hey"},
];

const landingpage = () => {
const [hoverindex,sethoverindex] = useState(null);
const [lasthoverindex,setlasthoverindex] = useState(1);
const divcount =5;
  return (
    <div>
        <div className='text-white'>

            <div className='h-[90vh] w-full px-20 bg-purple-600 border-t border-purple-600'>
                <div className='max-w-[27rem] mt-[7rem] ml-10 text-right '>
                    <h1 className='text-[10.5rem] font-bold leading-none uppercase font-["test_founders_grotesk_x"]'>Codexa</h1>
                    <p className='text-[1.2rem] leading-none'>Social platform for developers to connect, share projects, get inspired and collaborate with fellow developers</p>
                    {/* <Link to ="/signup"><Buttonx className="mt-5 ">Sign up</Buttonx></Link> */}
                    <Buttonx className="mt-5 ">Sign up</Buttonx>
                </div>

            </div>

            {/* <div className=' w-full px-20 py-20  bg-zinc-900'>
                <div className='max-w-[30rem]'>
                    <h1 className='text-[4rem] leading-none'>Showcase your work to the world</h1>
                </div>
                <div className="mt-16 flex gap-3 w-full">
                {flexdata.map((item, i) => (
                    <div
                    key={i}
                    onMouseEnter={() => { sethoverindex(i); setlasthoverindex(i); }}
                    onMouseLeave={() => sethoverindex(null)}

                    className={`h-[25rem] border-2 border-transparent w-[8rem] flex-grow rounded-lg bg-stone-500 relative transition-all duration-500 overflow-hidden flex items-center justify-center opacity-50
                    ${i === lasthoverindex && hoverindex === null ? "flex-grow-[10] border-white opacity-100" : ""}
                    ${i === hoverindex ? "flex-grow-[10] border-white opacity-100" : ""}
                    ${hoverindex !== null && hoverindex !== i ? "flex-grow" : ""}`}
                    >
                    <div className="flex flex-col absolute bottom-5 left-5">
                        <h1 className='text-[2rem] '>hello folks</h1>
                        <p>yes we are doing some dope work here</p>
                    </div>
                    
                    <img className="object-cover h-full " src={item.image}  />

                    </div>
                ))}
                </div>

                

            </div> */}

            <div className=' w-full px-20 bg-purple-700'>
                <div className='max-w-[40rem] py-20'>
                    <h1 className='text-[3rem] leading-none'>Explore projects worth inspiring</h1>
                </div>
            </div>
            
            <div className=' w-full px-20 bg-black '>
                <div className=' py-20 flex justify-between items-center'>
                    <h1 className='text-[3rem] leading-none'>codexa</h1>
                    <ul className='flex gap-10 capitalize'>
                        <li><a href='#'>insta</a></li>
                        <li><a href='#'>linkedin</a></li>
                        <li><a href='#'>github</a></li>
                        <li><a href='#'>twitter</a></li>
                    </ul>
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default landingpage
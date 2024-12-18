import React from 'react'
import { Link } from 'react-router-dom'

const feeddata=[
    {title:"responsive react frontend website",thumbnail:"./src/assets/thumbnail1.jpg",likes:23,comments:7,username:"miles_21",userdp:"./src/assets/dp.jpg",
    description:"Lorem ipsum dolor sit amet consectetur adip....",},
    {title:"Hotel management system",likes:23,comments:7,username:"karl_urban",userdp:"./src/assets/dp.jpg",
    description:"Lorem ipsum dolor sit amet consectetur adip....",},
    {title:"whatsapp automation with python",likes:23,comments:7,username:"karan_321",userdp:"./src/assets/dp.jpg",
    description:"Lorem ipsum dolor sit amet consectetur adip....",},
    {title:"Heap sort algorithm in c++",likes:23,comments:7,username:"gwen_stacy_11",userdp:"./src/assets/dp.jpg",
    description:"Lorem ipsum dolor sit amet consectetur adip....",},
    {title:"Heap sort algorithm in c++",likes:23,comments:7,username:"gwen_stacy_11",userdp:"./src/assets/dp.jpg",
    description:"Lorem ipsum dolor sit amet consectetur adip....",},
    {title:"Heap sort algorithm in c++",likes:23,comments:7,username:"gwen_stacy_11",userdp:"./src/assets/dp.jpg",
    description:"Lorem ipsum dolor sit amet consectetur adip....",},
    {title:"Heap sort algorithm in c++",likes:23,comments:7,username:"gwen_stacy_11",userdp:"./src/assets/dp.jpg",
    description:"Lorem ipsum dolor sit amet consectetur adip....",},
]


const feed = () => {
  return (
    <div>
        <div className='mx-10 '>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-10'>
                {feeddata.map((post,i)=>(
                    <div className='flex flex-col gap-2'>
                        <div className='w-full cursor-pointer group relative h-[18rem] rounded-lg overflow-hidden bg-stone-400'>

                            <div className='absolute top-3 text-white left-3 flex items-center gap-2'>
                                <div className="w-6 h-6 rounded-full overflow-hidden">
                                    <img className='w-full h-full object-cover' src={post.userdp}/>
                                </div>
                                <h1 className='hover:underline cursor-pointer'>{post.username}</h1>
                            </div>
                            <img src={post.thumbnail}
                            className='object-cover w-full h-full'/>
                            
                            <div className='opacity-0 transition-all group-hover:opacity-100 flex gap-3 absolute left-4 bottom-3 text-white'>
                                <div className='flex items-center gap-1'>
                                    <img className='w-4 h-4 invert' src="./src/assets/like.svg"/> 
                                    <div>{post.likes}</div>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <img className='w-4 h-4 invert' src="./src/assets/comment.svg"/> 
                                    <div>{post.comments}</div>
                                </div>
                            </div>

                        </div>
                        
                        <div className='ml-1'>
                            <h1 className='text-[1.3rem]  capitalize'>{post.title}</h1>
                            <p className='text-stone-500 '>{post.description}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default feed
import React, { useState } from 'react'
import profileData from './ProfileData'

const members = () => {

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userAction, setUserAction] = useState(null); 

  const handleLike = () => {
    if (userAction === 'like') {
      setLikes(likes - 1);
      setUserAction(null);
    } else {
      if (userAction === 'dislike') {
        setDislikes(dislikes - 1);
      }
      setLikes(likes + 1);
      setUserAction('like');
    }
  };

  const handleDislike = () => {
    if (userAction === 'dislike') {
      setDislikes(dislikes - 1);
      setUserAction(null);
    } else {
      if (userAction === 'like') {
        setLikes(likes - 1);
      }
      setDislikes(dislikes + 1);
      setUserAction('dislike');
    }
  };

  const [hoverindex,sethoverindex] = useState(null);
  const [lasthoverindex,setlasthoverindex] = useState(0);

  return (
    

    <div className='bg-zinc-50  w-full p-20 '>
        <h1 className='text-center italic'>not completed</h1>
        <h1 className='text-center text-zinc-700 mb-20 text-3xl'>On Board Members</h1>
        <div className='flex flex-wrap gap-5 w-full'>
            {profileData.map((m,i)=>(
                <div key={i} 
                    onClick={() => { sethoverindex(i); setlasthoverindex(i); }}
                    // onMouseLeave={() => sethoverindex(null)}
                     className={`cursor-pointer min-w-[15rem] w-[15rem] flex flex-col md:flex-row  transition-all duration-500 rounded-lg overflow-hidden
                    ${i === lasthoverindex && 'flex-grow-[10]'}
                    `}>
                    
                    <div>
                        <div className='rounded-lg border w-[12rem] overflow-hidden'>
                            <img className='h-full w-auto object-cover' src={m.image}/>
                        </div>
                        <h1 className={` font-semibold mt-4 border-2 rounded-full inline-block px-4 py-[1px] border-zinc-500 ${i===lasthoverindex ? 'bg-orange-600 border-orange-600 text-white':'text-zinc-800'}`}>{m.name}</h1>
                        <h1 className='mt-1 text-zinc-500 px-3'>{m.role}</h1>
                    </div>
                    <div className={`p-5 min-w-[10rem] text-zinc-600 ${i=== lasthoverindex? 'visible':'hidden'}`}>
                        <p className='line-clamp-5'>{m.bio?m.bio:"No info available about the member"}</p>
                        <div className="mt-5 flex flex-wrap gap-4">
            
                            <button onClick={handleLike} className={`flex items-center justify-center gap-1   py-[2px] rounded-md text-lg font-semibold  transition`}>
                                <h1 className='text-2xl '>👍</h1>
                                <span className="text-black">{likes}</span>
                            </button>

                            <button onClick={handleDislike} className={`flex items-center justify-center gap-1  py-[2px] rounded-md text-lg font-semibold transition`}>
                                <h1 className='text-2xl ml-2'>👎</h1>
                                <span className=" text-black">{dislikes}</span>
                            </button>
                        </div>
                    </div>
            </div>))}
        </div>
        
    </div>
  )
}

export default members
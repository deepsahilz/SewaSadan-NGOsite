import React, { useState } from 'react';

const ghostcard = ({ name, role, image }) => {
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

  return (
    <>
    
    <div className="p-8 b border-2  bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white rounded-xl shadow-lg ">

      <div className="flex sm:flex-row flex-col items-center gap-5 ">

        <div className='min-w-40 w-40 h-fit border-2 border-blue-600 shadow-lg overflow-hidden rounded-[8%] '>
            <img className="w-full h-full object-cover" src={image} alt={name}/>
        </div>

        <div className="flex flex-col">
          <h2 className="xl:text-[1.6rem] text-[1.4rem] font-semibold mb-2">{name}</h2>
          <p className="text-blue-400 mb-10">{role}</p>

          <div className="flex flex-wrap gap-3">
            
            <button onClick={handleLike} className={`flex items-center gap-2 px-1 max-px-2 py-[5px] rounded-full text-lg font-semibold border-2 border-blue-600 transition ${userAction === 'like'? 'bg-blue-600': ' hover:bg-blue-600'}`}>
                <h1 className='text-xl ml-2'>👍</h1>
                <span className="bg-white text-blue-500 h-[35px] w-[35px] rounded-full flex justify-center items-center">{likes}</span>
            </button>

            <button onClick={handleDislike} className={`flex items-center gap-2 px-1 max-px-2 py-[5px] rounded-full text-lg font-semibold transition border-2 border-red-600 ${userAction === 'dislike'? 'bg-red-600': ' hover:bg-red-600'}`}>
                <h1 className='text-xl ml-2'>👎</h1>
                <span className="bg-white text-red-500 h-[35px] w-[35px] rounded-full flex justify-center items-center">{dislikes}</span>
            </button>

          </div>
        </div>

      </div>

    </div>
    </>
  );
};

export default ghostcard;

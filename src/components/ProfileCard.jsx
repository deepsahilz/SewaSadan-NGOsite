import React, { useState } from 'react';

const ProfileCard = ({ name, role, image, bio }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userAction, setUserAction] = useState(null); // 'like', 'dislike', or null
  const [knowMore, setKnowMore] = useState(false); // Toggle for additional info

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

  const handleKnowMore = () => {
    setKnowMore(!knowMore);
  };

  return (
    <div className={`w-full  mx-auto bg-white text-gray-900 rounded-xl shadow-lg border border-gray-300 overflow-hidden`}>
      <div className="flex flex-col w-full  items-center md:items-stretch">
        {/* Image Section */}
        <div className=" w-full p-6 flex justify-center items-center">
          <div className="w-32 h-32 md:w-[11rem] md:h-[11rem] overflow-hidden rounded-full border-4 border-orange-600 shadow-md">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt={name}
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="flex-1 w-full items-center px-6 pb-6 flex flex-col justify-between">

          <div>
            <h2 className="text-2xl md:text-2xl truncate font-bold text-zinc-900 mb-2">
              {name}
            </h2>
            <p className="text-zinc-500 font-semibold mb-4">{role}</p>
          </div>

          {/* Buttons Section */}
          <div>
            <div className="flex  gap-4 mb-4">
              <button
                onClick={handleLike}
                className={`flex items-center border-2 border-blue-600  gap-2 px-4   rounded-full text-sm md:text-lg font-semibold transition 
                ${
                  userAction === 'like'
                    ? 'bg-blue-600  text-white'
                    : '  text-black hover:bg-blue-600'
                }
                `}
              >
                👍
                <span className=" ">
                  {likes}
                </span>
              </button>

              <button
                onClick={handleDislike}
                className={`flex items-center border-2 border-orange-600 gap-2 px-4 py-2 rounded-full text-sm md:text-lg font-semibold transition ${
                  userAction === 'dislike'
                    ? 'bg-orange-600  text-white'
                    : '  text-black hover:bg-orange-600'
                }`}
              >
                👎
                <span className="text-black">
                  {dislikes}
                </span>
              </button>
            </div>
          </div>

          {/* Know More Section */}
          <div className='w-full'>
            <button
              onClick={handleKnowMore}
              className="bg-orange-500  px-4 py-2 rounded-md text-sm md:text-lg font-semibold transition  text-white w-full"
            >
              {knowMore ? 'Show Less' : 'Know More'}
            </button>

            {knowMore && (
              <p className="mt-4 text-gray-700 leading-relaxed break-words">
                {bio || 'No additional information available.'}
              </p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfileCard;

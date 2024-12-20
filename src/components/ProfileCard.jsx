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
    <div className="max-w-3xl mx-auto my-10 bg-white text-gray-900 rounded-xl shadow-2xl border border-gray-300 ">
      <div className="flex flex-col md:flex-row">

        {/* Image Section */}
        <div className="bg-gradient-to-r from-orange-500 via-yellow-400 to-white flex-shrink-0 p-6 flex items-center justify-center">
          <div className="w-40 h-50 overflow-hidden rounded-md border-4 border-blue-700 shadow-md">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt={name}
            />
          </div>
        </div>

        {/* Details Section */}
        <div className=" flex-1 p-6 flex flex-col justify-between ">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">{name}</h2>
            <p className="text-orange-600 font-semibold mb-4">{role}</p>
            
          </div>

          {/* Buttons Section */}
          <div>
            <div className="flex gap-4 mb-4">
              <button
                onClick={handleLike}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-lg font-semibold transition ${
                  userAction === 'like'
                    ? 'bg-blue-700 hover:bg-blue-800 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                👍 Like
                <span className="bg-white text-blue-700 px-3 py-1 rounded-full">{likes}</span>
              </button>

              <button
                onClick={handleDislike}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-lg font-semibold transition ${
                  userAction === 'dislike'
                    ? 'bg-orange-700 hover:bg-orange-800 text-white'
                    : 'bg-orange-600 hover:bg-orange-700 text-white'
                }`}
              >
                👎 Dislike
                <span className="bg-white text-orange-700 px-3 py-1 rounded-full">{dislikes}</span>
              </button>
            </div>

            
          </div>     

              <button
                onClick={handleKnowMore}
                className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-md text-lg font-semibold transition shadow-md text-white w-[8rem]"
              > 
                {knowMore ? 'Show Less' : 'Know More'}
              </button>

              {knowMore && (
                <p className=" p-4 text-gray-700 leading-relaxed break-words">
                  {/* {bio || 'No additional information available.'} */}
                  {bio}
                </p>
                )}
    
            
        </div>
      </div>

            

    </div>
  );
};

export default ProfileCard;

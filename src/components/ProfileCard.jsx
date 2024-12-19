import React, { useState } from 'react';

const ProfileCard = ({ name, role, image }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userAction, setUserAction] = useState(null); // 'like', 'dislike', or null

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
    <div className="max-w-2xl mx-auto my-10 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
      <div className="flex items-center p-6">
        <img
          className="w-40 h-fit object-cover border-4 border-blue-500 rounded-[2%] shadow-lg mr-6"
          src={image}
          alt={name}
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">{name}</h2>
          <p className="text-blue-400 mb-4">{role}</p>
        </div>
      </div>

      <div className="flex gap-6 mb-6 justify-center">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 px-6 py-2 rounded-full text-lg font-semibold transition ${
            userAction === 'like'
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          👍 Like
          <span className="bg-white text-blue-500 px-3 py-1 rounded-full">{likes}</span>
        </button>

        <button
          onClick={handleDislike}
          className={`flex items-center gap-2 px-6 py-2 rounded-full text-lg font-semibold transition ${
            userAction === 'dislike'
              ? 'bg-red-600 hover:bg-red-700'
              : 'bg-red-500 hover:bg-red-600'
          }`}
        >
          👎 Dislike
          <span className="bg-white text-red-500 px-3 py-1 rounded-full">{dislikes}</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;

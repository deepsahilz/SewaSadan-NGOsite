import React from 'react'

function Profile() {
  return (
    <div>
       <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md flex items-center">
      {/* Square Profile Image */}
      <div className=''>
      <img src="src/img/WhatsApp Image 2024-12-18 at 11.21.45_3fa33fd2.jpg" alt="Profile"
        className="w-32 h-32 rounded-lg object-cover" />
      </div>
      {/* Bio Section */}
      <div className="ml-6">
        <h2 className="text-2xl font-bold text-gray-800">Rajpal Nagpal</h2>
        <p className="text-gray-500">Secretsry</p>
        <p className="mt-2 text-gray-700">Joined on 1st december 2024</p>
      </div>
    </div>


    {/* <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <RatingChart />
    </div> */}
  
    </div>
  )
}

export default Profile
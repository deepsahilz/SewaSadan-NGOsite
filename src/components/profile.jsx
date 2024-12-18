import React from 'react'



function Profile() {
  return (
    <div>
        <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md flex items-center">
            {/* Square Profile Image */}
            <div className='border-[5px] rounded-[8%]'>
                <img src="/path/to/image.jpg"  alt="Profile"  className="w-32 h-32 rounded-lg object-cover" />
            </div>
            {/* Bio Section */}
            <div className="ml-6">
                    <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
                    <p className="text-gray-500">Software Developer</p>
                    <p className="mt-2 text-gray-700">Passionate about building web applications and creating elegant user experiences.</p>
            </div>
         </div>

    
    </div>
  )
}

export default Profile
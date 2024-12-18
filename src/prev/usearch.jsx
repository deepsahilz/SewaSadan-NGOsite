import React from 'react'
import { Link } from 'react-router-dom'

const userdata =[
    {username:"gwenyson",
    fullname: "gwen stacy",
    dp:"./src/assets/dp1.jpg",
    followers:5,
    following:20,
    projectcount:5,
    country:"india"},

    {username:"noir_",
    fullname: "spider noir",
    dp:"./src/assets/dp23.jpg",
    followers:5,
    following:20,
    projectcount:5,
    country:"india"},

    {username:"peter2099",
    fullname: "michael ohara",
    dp:"./src/assets/dp3.png",
    followers:5,
    following:20,
    projectcount:5,
    country:"india"},
    
    {username:"indian_spidey",
    fullname: "pavitra prabhakar",
    dp:"./src/assets/dp4.png",
    followers:5,
    following:20,
    projectcount:5,
    country:"india"},

    {username:"vulture",
    fullname: "michael keaton",
    dp:"./src/assets/dp5.png",
    followers:5,
    following:20,
    projectcount:5,
    country:"india"},

    {username:"miles_",
    fullname: "miles morales",
    dp:"./src/assets/dp6.png",
    followers:5,
    following:20,
    projectcount:5,
    country:"india"},
]

const usearch = () => {
  return (
    <div className='bg-stone-200'>
        <div className='px-10 pt-10'>
            <div className='grid  md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-10'>
            {userdata.map((user)=>(
                        <div className='flex flex-col border-2 border-transparent hover:border-white transition-colors py-5 px-5 rounded-md bg-stone-100 hover:bg-white items-center'>

                            <div className='flex lg:flex-col items-center justify-center w-full '>
                            
                            <div className='w-[6rem] h-[6rem] md:w-[10rem]  md:h-[10rem] border-2 overflow-hidden rounded-full '>
                                <img className='w-full h-full object-cover' src={user.dp} alt='User' />
                            </div>

                            <div  className='flex flex-col lg:items-center '>
                                <div className='max-w-[15rem] mt-4 lg:text-center'>
                                    <h1 className='font-bold capitalize truncate text-[1.5rem] text-stone-800'>{user.fullname}</h1>
                                </div>
                                <div className='max-w-[10rem] lg:text-center'>
                                    <h1 className='text-[18px] truncate text-gray-600'>@{user.username}</h1>
                                </div>
                                <div className='max-w-[10rem] lg:hidden flex lg:justify-center'>
                                    <div className='text-[18px] gap-1 items-center truncate text-gray-600 flex'>
                                        <img className='w-4 h-4' src="./src/assets/location.svg"/> 
                                        <div>{user.country}</div>
                                    </div>
                                </div>
                            </div>
                            </div>

                            <div className='flex gap-4 mt-3'>
                                <div className='flex  items-center gap-1'>
                                    <h2 className='text-[1.1rem] font-bold'>{user.projectcount}</h2>
                                    <h2>Projects</h2>
                                </div>
                                <div className='flex  items-center gap-1'>
                                    <h2 className='text-[1.1rem] font-bold'>{user.followers}</h2>
                                    <h2>Follower</h2>
                                </div>
                                <div className='flex  items-center gap-1'>
                                    <h2 className='text-[1.1rem] font-bold'>{user.following}</h2>
                                    <h2>Following</h2>
                                </div>
                            </div>

                            <p className=' max-w-[25rem] text-center mt-4 text-stone-700'>{user.aboutme}</p>
                            <div className='max-w-[15rem]'>
                                <a href=''><h2  className='text-blue-600 truncate'>{user.weblink}</h2></a>
                            </div>
                            <div className=" max-w-[25rem] cursor-pointer px-4 w-full py-2 text-center  rounded-lg bg-blue-600 text-white">View profile</div>
                            
                    </div>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default usearch
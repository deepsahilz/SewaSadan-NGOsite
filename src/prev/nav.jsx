import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const chatmessages =[
  {username:"gwen stacy",dp:"./src/assets/dp1.jpg",message:"why aren't you picking phone",timez:"2m"},
  {username:"noir 23",dp:"./src/assets/dp23.jpg",message:"yo kid,i want tv",timez:"2m"},
  {username:"peter2099",dp:"./src/assets/dp3.png",message:"you can't hide from me",timez:"2m"},
  {username:"pavitra prabhakar",dp:"./src/assets/dp4.png",message:"want some chai tea",timez:"2m"},
  {username:"vulture",dp:"./src/assets/dp5.png",message:"i'll kill you peter",timez:"2m"},
  {username:"miles",dp:"./src/assets/dp6.png",message:"remember the spider society",timez:"2m"},
  {username:"gwen_v21",dp:"./src/assets/dp7.png",message:"i want to meet you rn",timez:"2m"},
  {username:"gwen_again",dp:"./src/assets/dp1.jpg",message:"let have dinner at eiffel?",timez:"2m"},
  {username:"mileyy",dp:"./src/assets/dp.jpg",message:"you messed up the multiverse idiot",timez:"2m"},
]

const Nav = () => {
  const [fadebg, setfadebg] = useState(false);

  const [showInbox, setShowInbox] = useState(false);
  const [showNotifs, setShowNotifs] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleMouseEnterInbox=()=>{
    setShowInbox(true)
    setfadebg(true)
  }
  const handleMouseLeaveInbox=()=>{
    setShowInbox(false)
    setfadebg(false)
  }  

  const handleMouseEnterNotifs=()=>{
    setShowNotifs(true)
    setfadebg(true)
  }
  const handleMouseLeaveNotifs=()=>{
    setShowNotifs(false)
    setfadebg(false)
  } 

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMobileMenuOpen(false); 
  };


  return (
    <div className='top-0 left-0 z-20 fixed w-full  '>


      <div className=' text-white px-10 py-4 bg-black w-full '>
        
        {/* content nav */}
        <div className="hidden lg:flex justify-between items-center">

          {/* left part */}
          <div className='flex gap-10 items-center'>

            <div className="logo ">
              <h1>
                {/* <Link to="/" className='text-[1.5rem] font-bold'>Codexa</Link> */}
                <a className='text-[1.5rem] font-bold'>Codexa</a>
                </h1>
            </div>

            <ul className='flex items-center gap-8'>
                <li>
                  {/* <Link to="/explore" href='#'>Explore</Link> */}
                  <a href='#'>Explore</a>
                  </li>
                <li><a href='#'>Collaborate</a></li>
                <li><input className='rounded-full w-[20rem] px-[1.5rem] py-2' placeholder='Search here'/></li>
            </ul>

          </div>    
          
        
          <ul className='flex gap-5 items-center '>
            <li className='hidden xl:block rounded-full border-[2px] border-stone-500  text-stone-400 px-5 py-[6px]'>
              {/* <Link to="/createpost" href='#'>Share project</Link></li> */}
              <a  href='#'>Share project</a></li>

            {/* inbox icon with preview */}
            <li className=' py-[10px] cursor-pointer'
              onMouseEnter ={handleMouseEnterInbox}
              onMouseLeave ={handleMouseLeaveInbox}
              >
              
              <div className="relative">

                <a href="#"><img className='w-5 h-5 invert' src="./src/assets/inbox.svg"/></a>

                {showInbox && (
                  <div className='-right-[2.2rem] rounded-md clip-corner-v  bg-white flex-col top-[25px] absolute z-20'>
                    <div className='mt-[13px] overflow-auto flex-col w-[20rem] min-h-[20rem] h-[20rem]'>
                    <div className='py-3 border-b border-gray-300'><h1 className='text-black capitalize font-bold text-center'>your messages</h1></div>

                    {chatmessages.map((item,i)=>(
                          <div className='py-3 border-t flex justify-between items-center hover:bg-zinc-200  transition-colors px-6'>
                            <div className='flex gap-3 items-center'>
                              <div className='w-[2.2rem] h-[2.2rem] overflow-hidden rounded-full'>
                                <img className='w-full h-full object-cover' src={item.dp}/>
                              </div>
                              <div className='flex flex-col leading-none gap-1'>
                                <h1 className='text-stone-800 font-bold truncate max-w-[8.5rem]'>{item.username}</h1>
                                <p className='text-stone-700 max-w-[10rem] truncate'>{item.message}</p>
                              </div>
                            </div>
                            <div className='text-gray-600 text-[12px]'>{item.timez} ago</div>
                          </div>
                        ))}
                  </div>
                        
                  </div> 
                )}
              </div>
             </li>

            <li className=' py-[10px] cursor-pointer'
              onMouseEnter ={handleMouseEnterNotifs}
              onMouseLeave ={handleMouseLeaveNotifs}>
              
              <div className="relative">

                <a href="#"><img className='w-5 h-5 invert' src="./src/assets/bell.svg"/></a>

                {showNotifs && (
                  <div className='-left-[18rem] rounded-md overflow-auto min-h-[18rem] bg-white flex-col w-[22rem] h-[20rem] top-[30px] absolute z-20'>
                    <div className='py-3 border-b border-gray-300'><h1 className='text-black capitalize font-bold text-center'>your notifications</h1></div>

                    {chatmessages.map((item,i)=>(
                          <div className='py-3 border-t flex justify-between items-center hover:bg-zinc-200  transition-colors px-6'>
                            <div className='flex gap-3 items-center'>
                              <div className='w-[2.2rem] h-[2.2rem] overflow-hidden rounded-full'>
                                <img className='w-full h-full object-cover' src={item.dp}/>
                              </div>
                              <div className='flex flex-col leading-none gap-1'>
                                <h1 className='text-stone-800 font-bold truncate max-w-[8.5rem]'>{item.username}</h1>
                                <p className='text-stone-700 max-w-[10rem] truncate'>{item.message}</p>
                              </div>
                            </div>
                            <div className='text-gray-600 text-[12px]'>{item.timez} ago</div>
                          </div>
                        ))}
                        
                  </div> 
                )}
              </div>
             </li>
            
            <li>
              {/* <Link to="/profile"> */}
                <div className='flex items-center gap-2'>
                  <div className=' rounded-full overflow-hidden w-8 h-8'>
                    <img src='src/assets/dp.jpg' className='w-full h-full object-cover'/>
                  </div>
                  miles_21       
                </div>
                {/* </Link> */}
            </li>

          </ul>
          {/* right part */}






        </div>

        <div className='lg:hidden flex justify-between'>
          <div className='font-bold'>Co</div>
          <button onClick={toggleMobileMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* {fadebg && <div className='bg-black w-full h-[100vh] opacity-50 absolute'></div>} */}
      <div className={`bg-black w-full pointer-events-none h-[100vh] transition-opacity duration-150 absolute ${fadebg?"opacity-60":"opacity-0"}`}></div>


      {isMobileMenuOpen && (
        <div className='lg:hidden mt-4 ml-5'>
          <ul className='flex flex-col gap-8'>
            <li  onClick={() => handleLinkClick('Home')}>Home</li>
            <li  onClick={() => handleLinkClick('Projects')}>Projects</li>
            <li  onClick={() => handleLinkClick('Downloads')}>Downloads</li>
            <li  onClick={() => handleLinkClick('Contact')}>Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;

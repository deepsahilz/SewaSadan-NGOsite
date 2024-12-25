import React from 'react'
import Nav from './components/nav'
import HeroSection from './components/heroSection'
import Contact2 from './components/Footer'
import ProfileCard from './components/ProfileCard'
import profileData from './components/ProfileData'
import Ghostboard from './components/ghostboard'
import Hero2 from './components/hero2'
import NameCarousel from './components/NameCarousel'
import Marquee from './components/marquee'
import Nav2 from './components/nav2'
import HeroSection2 from './components/heroSection2'
import Members from './components/members'
import Footer from './components/Footer'

function App() {

  return (
    <>
    {/* <Nav/> */}
    {/* <Hero2/> */}

    <Nav2/>
    <HeroSection/>
    <Marquee/>
    <HeroSection2/>
    {/* <Members/> */}
    {/* <Ghostboard/> */}

    <div className='pt-20 px-10 lg:px-20 pb-28  bg-zinc-100'>
      <h1 className='text-center text-3xl text-zinc-800 font-semibold mb-16'>On Board Members</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  ">
        {profileData.map((profile) => (
          <ProfileCard
          key={profile.id}
          name={profile.name}
          role={profile.role}
          image={profile.image}
          bio={profile.bio}
          />
          ))}
      </div> 
    </div>  
    
    <Footer/>
    
    </>
  )
}

export default App

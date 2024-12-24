import React from 'react'
import Nav from './components/nav'
import HeroSection from './components/heroSection'
import Contact2 from './components/contact2'
import ProfileCard from './components/ProfileCard'
import profileData from './components/ProfileData'
import Ghostboard from './components/ghostboard'
import Hero2 from './components/hero2'
import NameCarousel from './components/NameCarousel'
import Marquee from './components/marquee'
import Nav2 from './components/nav2'
import HeroSection2 from './components/heroSection2'
import Members from './components/members'

function App() {

  return (
    <>
    {/* <Nav/> */}
    {/* <Hero2/> */}

    <Nav2/>
    <HeroSection/>
    <Marquee/>
    <HeroSection2/>
    <Members/>
    {/* <Ghostboard/> */}

    <div className="p-10">
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
    
    <Contact2/>
    
    </>
  )
}

export default App

import React from 'react'
import Nav from './components/nav'
import Poll from './components/poll'
import HeroSection from './components/heroSection'
import Contact2 from './components/contact2'
import ProfileCard from './components/ProfileCard'
import profileData from './components/ProfileData'
import Ghostboard from './components/ghostboard'


function App() {

  return (
    <>
    <Nav/>
    <HeroSection/>
    {/* <Poll/> */}

    <Ghostboard/>
    <div className="p-10">
      {profileData.map((profile) => (
        <ProfileCard
          key={profile.id}
          name={profile.name}
          role={profile.role}
          image={profile.image}
        />
      ))}
    </div> 
    
    <Contact2/>
    
    </>
  )
}

export default App

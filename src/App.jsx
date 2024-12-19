import React from 'react'
import Nav from './components/nav'
import Poll from './components/poll'
import HeroSection from './components/heroSection'
import Contact2 from './components/contact2'
import ProfileCard from './components/ProfileCard'
import profileData from './components/ProfileData'

function App() {

  return (
    <>
    <Nav/>
    <HeroSection/>
    <Poll/>
    <Contact2/>
=======
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
    
    
    </>
  )
}

export default App

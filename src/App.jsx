import React from 'react'
import Nav from './components/nav'
import Poll from './components/poll'
import HeroSection from './components/heroSection'
<<<<<<< HEAD
import Contact2 from './components/contact2'
=======
import ProfileCard from './components/ProfileCard'
import profileData from './components/ProfileData'
>>>>>>> 616422b22d3603f0a668644e5b5447d65801e0c9

function App() {

  return (
    <>
    <Nav/>
    <HeroSection/>
    <Poll/>
<<<<<<< HEAD
    {/* <Profile/> */}
    {/* <RatingChart/> */}
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
>>>>>>> 616422b22d3603f0a668644e5b5447d65801e0c9
    
    
    </>
  )
}

export default App

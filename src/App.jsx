import React from 'react'
import Hero from './Component/Hero/Hero'
import Navbar from './Component/Navbar/Navbar'
import OurWebsites from './Component/Our Websites/OurWebsites'
import GetWebsite from './Component/Get Website/GetWebsite'
import Findout from './Component/Findout/Findout'
import GivingBack from './Component/GivingBack/GivingBack'
import Expect from './Component/Expect/Expect'
import GreenlightCreated from './Component/GreenlightCreated/GreenlightCreated'
import Footer from './Component/Footer/Footer'

const App = () => {
  return (
    <div>
      
      <Hero/>
      <OurWebsites/>
     <GetWebsite/>
     <Findout/>
      <Expect/>
              <GreenlightCreated/>  

        <GivingBack/>
    
      <Footer/> 
    </div>
  )
}

export default App
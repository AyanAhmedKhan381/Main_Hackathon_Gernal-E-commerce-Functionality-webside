

import React from 'react'
import { HeroSection } from '../../components/RouteHero/RouteHero'
import ContactForm, { ContactForm2 } from '../../components/ContactForm/ContactForm'
import Buttom_Features_Section from '../../components/RouteButtom-Section/RouteHero'

const page = () => {
  return (
    <div>
     <HeroSection Title="Contact" miniTitle="Contact"/>
     <ContactForm2/>
     <ContactForm/>
     <Buttom_Features_Section/>

     

    </div>
  )
}

export default page

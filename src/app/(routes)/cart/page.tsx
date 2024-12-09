
import Cart from '@/app/components/Cart/Cart'
import Buttom_Features_Section from '@/app/components/RouteButtom-Section/RouteHero'
import { HeroSection } from '@/app/components/RouteHero/RouteHero'
import React from 'react'

const page = () => {
  return (
    <div>
    <HeroSection Title="Cart" miniTitle="Cart"/>
    <Cart/>
    <Buttom_Features_Section/>

    </div>
  )
}

export default page

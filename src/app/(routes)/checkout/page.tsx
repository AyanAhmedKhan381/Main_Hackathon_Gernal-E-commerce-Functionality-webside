


import Checkout from '@/app/components/Checkout_OrderSummary/CheckOut'
import { HeroSection } from '@/app/components/RouteHero/RouteHero'
import React from 'react'

const page = () => {
  return (
    <div>
    <HeroSection Title="Checkout" miniTitle="Checkout"/>
    <Checkout/>
    </div>
  )
}

export default page

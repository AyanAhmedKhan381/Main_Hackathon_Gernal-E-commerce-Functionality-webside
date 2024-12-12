import Product_Hero_Card from '@/app/components/add-to-Product/ProductHeroCard/ProductHeroCard'
import Shopping_Cards from '@/app/components/add-to-Product/Shopping_Cards/Shopping_Cards'
import Smoll_Banner from '@/app/components/add-to-Product/Small_Banner'
import InformationSection from '@/app/components/add-to-Product/Therd_InformationSection/InformationSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <Smoll_Banner/>
      <Product_Hero_Card/>
      <InformationSection/>
      <Shopping_Cards/>
    </div>
  )
}

export default page

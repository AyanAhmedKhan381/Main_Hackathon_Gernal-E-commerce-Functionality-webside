

import React from 'react'
import { HeroSection } from '../../components/RouteHero/RouteHero'
import FilterAndSortSection from '../../components/FilterAndSortSection/FilterAndSortSection'
import ProductGrid from '../../components/Product-Page/Product'
import Pagination from '../../components/Pagination/Pagination'
import Buttom_Features_Section from '../../components/RouteButtom-Section/RouteHero'

const page = () => {
  return (
    <div>
      <HeroSection Title="Shop" miniTitle="Shop"/>
      <FilterAndSortSection/>
      <ProductGrid/>
      <Pagination/>
      <Buttom_Features_Section/>
    </div>
  )
}

export default page

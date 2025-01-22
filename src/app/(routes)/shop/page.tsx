

import React from 'react'
import { HeroSection } from '../../components/RouteHero/RouteHero'
import FilterAndSortSection from '../../components/FilterAndSortSection/FilterAndSortSection'
import Pagination from '../../components/Pagination/Pagination'
import Buttom_Features_Section from '../../components/RouteButtom-Section/RouteHero'
import ProductsSection from '@/app/components/Our_Products/Our-Products'

const page = () => {
  return (
    <div>
      <HeroSection Title="Shop" miniTitle="Shop"/>
      <FilterAndSortSection/>
      <ProductsSection/>
      <Pagination/>
      <Buttom_Features_Section/>
    </div>
  )
}

export default page

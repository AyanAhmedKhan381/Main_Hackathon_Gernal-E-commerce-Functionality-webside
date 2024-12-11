import Product_Comparison_Home from '@/app/components/Product Comparison/ProductHome'
import ComparisonMain from '@/app/components/Product2ndComparison/ComparisonMain'
import { HeroSection } from '@/app/components/RouteHero/RouteHero'
import React from 'react'

const page = () => {
  return (
    <div>
    <HeroSection Title="Product Comparison" miniTitle="Comparison"/>
    <Product_Comparison_Home/>
    <ComparisonMain/>
    </div>
  )
}

export default page



import React from 'react'
import GernalComparison from './Comparison_Gernal'
import ProductComparison from './Product'
import DimensionsComparison from './DimensionTable'
import WarrantyComparison from './WarrantySection'

const ComparisonMain = () => {
  return (
    <div className='gap-10 mb-10 w-[68%] ml-20'>
      <GernalComparison/>
      <ProductComparison/>
      <DimensionsComparison/>
      <WarrantyComparison/>
    </div>
  )
}

export default ComparisonMain

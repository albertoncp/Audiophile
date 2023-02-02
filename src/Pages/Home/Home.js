import React from 'react'
import CategoryCards from '../../components/CategoryCards/CategoryCards'
import HomeBanner from '../../components/HomeBanner/HomeBanner'
import ProductGrid from '../../components/ProductGrid/ProductGrid'
import ShopIntro from '../../components/ShopIntro/ShopIntro'

import "./Home.scss"
const Home = () => {
  return (
    <div>
    <HomeBanner/>
    <div className='divContainer' >
    
    <CategoryCards  style={{ marginTop: "70px", marginBottom: "70px" }} />
    <ProductGrid/>
    <ShopIntro/>
    </div>

    </div>
  )
}

export default Home
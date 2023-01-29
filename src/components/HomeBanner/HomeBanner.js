import React from 'react'
import "./HomeBanner.scss"

const HomeBanner = () => {
  return (
    <div className='BannerContainer'   >
    
    

    <div className='infoContainer' >
    <p className='title' >New product</p>
     <h1>XX99 Mark II Headphones</h1>
    <p className='description'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
     <button>SEE PRODUCT</button>   
    </div>

    <img
    className='home-banner__image'
    src='/images/home/desktop/hero.jpeg'> 
    </img>
    
    
    
    </div>
  )
}

export default HomeBanner
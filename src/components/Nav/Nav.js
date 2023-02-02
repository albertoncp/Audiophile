import React from 'react'
import { useStateContext } from '../../lib/context';
import CategoryCard from '../CategoryCard.js/CategoryCard';
import "./Nav.scss"
const Nav = () => {

    const { setShowNav, showNav} = useStateContext();

  return (
    <div onClick={() => setShowNav(false)}  className='navContainer' >
        <div onClick={(e) => e.stopPropagation()} className='cards' >
        <CategoryCard
            title="headphones"
            imgPath="/images/shared/desktop/image-category-thumbnail-headphones.png"

        />
        <CategoryCard
            title="speakers"
            imgPath="/images/shared/desktop/image-category-thumbnail-speakers.png"

        />
        <CategoryCard
            title="earphones"
            imgPath="/images/shared/desktop/image-category-thumbnail-earphones.png"

        />
        </div>
    </div>
  )
}

export default Nav
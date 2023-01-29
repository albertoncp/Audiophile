import React from 'react'
import CategoryCard from '../CategoryCard.js/CategoryCard'
import "./CategoryCards.scss"

const CategoryCards = ({style}) => {
    
  return (
    <div className='cardsDiv'  style={style}>
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
  )
}

export default CategoryCards
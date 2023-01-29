import React from 'react'
import {Link} from "react-router-dom"
import "./CategoryCard.scss"

const CategoryCard = (props) => {
    const {title, imgPath} = props
    
  return (
    <div className='card' >
        <img className='mainImage' src={imgPath} ></img>
        <h6>{title}</h6>
        <div className='shopContainer' >
            <Link >
            <a>shop</a>
            </Link>
            <img
            className='orangeCard'
            src="/images/shared/desktop/icon-arrow-right.svg"
          alt="orange arrow right">

            </img>
        </div>
    </div>
  )
}

export default CategoryCard
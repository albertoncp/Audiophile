import React from 'react'
import "./Footer.scss"
import {FaInstagramSquare} from "react-icons/fa"
import {FaTwitterSquare} from "react-icons/fa"
import {FaFacebookSquare} from "react-icons/fa"
const Footer = () => {
  return (
    <div>
        <div className='menu' >
        
            <div className='menu__image'>
            <img src='images\shared\logo.svg' ></img>
            </div>
            

            <ul>
                <li>Home</li>
                <li>headphones</li>
                <li>speakers</li>
                <li>earphones</li>
            </ul>
            <div className='menuParagraph'>
 
            
            <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
            
            </div>

            <div className='menu__icons' >
                <FaInstagramSquare size={30} color="white" />
                <FaTwitterSquare size={30} color="white" />
                <FaFacebookSquare size={30} color="white" />
            </div>
        </div>
    </div>
  )
}

export default Footer
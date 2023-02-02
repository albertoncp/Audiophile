import React from "react";
import "./ShopIntro.scss";

const ShopIntro = () => {
  return (
    <div className="shopIntro">
      <div className="imgContainer">
        <img className="mobileIntro" src="images\shared\mobile\image-best-gear.jpg" alt=""></img>
        <img className="tabletIntro" src="images\shared\tablet\image-best-gear.jpg" alt=""></img>
      </div>
      
      <div className="infoShop">
        <div className="infoShop__title" >
          <p>
            bringing you the <span>best</span> audio gear
          </p>
        </div>
        <p className="text" >
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default ShopIntro;

import React from 'react';
import holaLogo from '../Content/hola/logo small.png'
import holaImgOne from '../Content/hola/hola-1.png'
import holaImgTwo from '../Content/hola/hola-2.png'
import holaImgThree from '../Content/hola/hola-3.png'
import gtumLogo from '../Content/gtum/site-icon-8.png'
import gtumImgOne from '../Content/gtum/Contact Page.JPG'
import gtumImgTwo from '../Content/gtum/Podcasts.JPG'
import gtumImgThree from '../Content/gtum/Cart1.JPG'
import ghsLogo from '../Content/ghs/cropped-gateway_logo-removebg-preview.png'
import ghsImgOne from '../Content/ghs/one.png'
import ghsImgTwo from '../Content/ghs/two.png'
import ghsImgThree from '../Content/ghs/three.png'


function Wordpress() {
  return <div className='secondContainer wp-container'>

        <div className='website-container'>
      <div className='wp-web-container'>
          <div className='wp-logo'>
          <img className='wp-logo-img' src={holaLogo}/>
          </div>
          <div className='wp-img-container'>
              <img className='wp-image' src={holaImgOne}/>
              <img className='wp-image' src={holaImgTwo}/>
              <img className='wp-image' src={holaImgThree}/>
          </div>
        <button><a href='https://holaenterprise.ca/'>Visit Website</a></button>
        <hr></hr>
      </div>

      <div className='wp-web-container'>
          <div className='wp-logo'>
          <img className='wp-logo-img' style={{transform:'scale(0.5,0.5)'}} src={gtumLogo}/>
          </div>
          <div className='wp-img-container'>
              <img className='wp-image' src={gtumImgOne}/>
              <img className='wp-image' src={gtumImgTwo}/>
              <img className='wp-image' src={gtumImgThree}/>
          </div>
        <button><a href='https://goingtheultramile.tv/'>Visit Website</a></button>
        <hr></hr>
      </div>

      <div className='wp-web-container'>
          <div className='wp-logo'>
          <img className='wp-logo-img' style={{transform:'scale(0.9,0.9)',margin:'50px'}} src={ghsLogo}/>
          </div>
          <div className='wp-img-container'>
              <img className='wp-image' src={ghsImgOne}/>
              <img className='wp-image' src={ghsImgTwo}/>
              <img className='wp-image' src={ghsImgThree}/>
          </div>
        <button><a href='https://www.gatewayhealthservices.com.pk/?page_id=665'>Visit Website</a></button>
        <hr></hr>
      </div>

      </div>
  </div>
}

export default Wordpress;

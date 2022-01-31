import React from 'react';
import marcheLogo from '../Content/marche/Asset 14-8.png'
import marcheImgOne from '../Content/marche/Picture1.png'
import marcheImgTwo from '../Content/marche/Picture2.png'
import marcheImgThree from '../Content/marche/Picture3.png'
import kLogo from '../Content/kontext/Asset 1-8.png'
import kImgOne from '../Content/kontext/first.png'
import kImgTwo from '../Content/kontext/second.png'
import kImgThree from '../Content/kontext/three.png'
import covid from '../Content/SARs Covid 19 App.mp4'

function Mern() {

  

  return <div className='secondContainer wp-container'>
      <div className='website-container'>
      <div className='wp-web-container'>
          <div className='wp-logo'>
          <img className='wp-logo-img' src={marcheLogo}/>
          </div>
          <div className='wp-img-container'>
              <img className='wp-image' src={marcheImgOne}/>
              <img className='wp-image' src={marcheImgTwo}/>
              <img className='wp-image' src={marcheImgThree}/>
          </div>
        <button><a href='https://github.com/iamsaimsheikh/MarcheWebApp'>Visit Git</a></button>
        <hr></hr>
      </div>

      <div className='wp-web-container'>
          <div className='wp-logo'>
          <img className='wp-logo-img' style={{margin:'30px'}} src={kLogo}/>
          </div>
          <div className='wp-img-container'>
              <img className='wp-image' src={kImgOne}/>
              <img className='wp-image' src={kImgTwo}/>
              <img className='wp-image' src={kImgThree}/>
          </div>
        <button><a href='https://github.com/iamsaimsheikh/kontextTM'>Visit Git</a></button>
        <hr></hr>
      </div>

      <div className='wp-web-container'>
          <div className='wp-logo'>
          <h1>COVID <span>19</span></h1>
          </div>
          <div className='wp-img-container'>
          <video width="600" height="300" controls muted>
            <source src={covid} />
          </video>
          </div>
        <button><a href='https://github.com/iamsaimsheikh/covid-19'>Visit Git</a></button>
        <hr></hr>
      </div>
      
      </div>

      
  </div>
}

export default Mern;

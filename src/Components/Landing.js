import React,{useState,useEffect} from 'react'
import '../../src/App.css'
import picture from '../Content/saim.jpeg'
import wordpress from '../Content/wordpress.png'
import xd from '../Content/xd.png'
import reactjs from '../Content/react.png'
import illustrator from '../Content/illustrator.png'



function Landing() {

    
    return (
        <div className='secondContainer'>
            <div className='col-one'>
            <div className='landing-div'> <img src={picture}></img></div>
            <div class="loader-outside">  </div>
            <div class="loader-between">  </div> 
            <div class="loader">  </div>
            <div class="loader-inside"></div>
            </div>
            <div className='col-two'>
                <h2>Welcome to my portfolio!</h2>
                <h1>I'm a <div id='fadeUp'> <span id='field'> </span></div></h1>
                <div className='icon-grid'>
                    <img className='icon' src={wordpress}/>
                    <img className='icon' src={illustrator}/>
                    <img className='icon' src={xd}/>
                    <img className='icon reactjs' src={reactjs}/>
                </div>
                <h4>Creative, independent and detail-oriented graphic designer, wordpress, and 
                   front-end developer with two years of experience in freelancing with local and 
                   international clients. If you're looking to get your business a strong online presence,
                   then you're at the right place!</h4>
            </div>
        </div>
    )
}

export default Landing

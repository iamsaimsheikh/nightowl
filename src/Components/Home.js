import React,{useState} from 'react'
import '../../src/App.css'
import FLogo from '../Content/fiver-logo.png'
import VLogo from '../Content/vecstacy-logo.png'
import Landing from './Landing'
import Design from './Design'


function Home() {
    
    const [secondContainer,setsecondContainer] = useState('Home');

    const switchToDesign = (screen) => {
       var container = document.getElementById('container');
       container.className="containerDark";
       var navLinks= document.getElementById('nav-links').getElementsByTagName('a');
       navLinks[0].setAttribute("class","nav-links-dark")
       navLinks[1].setAttribute("class","nav-links-dark")
       navLinks[2].setAttribute("class","nav-links-dark")
       setsecondContainer(screen)
    }


    return (
        <div className='container' id='container'>
            <div className='nav-bar'>
                <div className='logo' onClick={()=>{
                    document.getElementById('container').className="container"
                    var navLinks= document.getElementById('nav-links').getElementsByTagName('a');
                    navLinks[0].removeAttribute("class");
                    navLinks[1].removeAttribute("class");
                    navLinks[2].removeAttribute("class");
                    setsecondContainer('Home');
                    }}></div>
                    <div className='nav-links' id="nav-links"> 
                        <a  href='#' onClick={() => switchToDesign('Design')}>Design</a>
                        <a  href='#' onClick={switchToDesign}>Wordpress</a>
                        <a  href='#' onClick={switchToDesign}>MERN</a>
                    </div>
                </div>
                {/* Paste After This */}
                {secondContainer ==='Home'? <Landing/> : <Design />}
                        
            {/* Paste Before This */}
            <div className='contact'>+923485516445   |   iamsaimsheikh@gmail.com   | 
            <img src={FLogo} height={17} width={17}/> 
             <a href='https://www.fiverr.com/iamsaimsheikh?' > Fiverr</a> |
             <img src={VLogo} height={15} width={17}/> 
             <a href='https://www.instagram.com/thevecstacy/' > The Vecstacy</a>
             </div>
        </div>
        
    )
}

export default Home

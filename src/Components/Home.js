import React,{useState} from 'react'
import '../../src/App.css'
import GLogo from '../Content/github.png'
import LLogo from '../Content/linkedin.png'
import VLogo from '../Content/vecstacy-logo.png'
import Landing from './Landing'
import Design from './Design'
import Snow from './Snow'
import Wordpress from './Wordpress'
import Mern from './Mern'
import owlDark from '../Content/owlDark.png'
import owlLight from '../Content/owlLight.png'


function Home() {
    
    const [secondContainer,setsecondContainer] = useState('Home');
    const [navDark,setNavDark] = useState(false)

    const switchToDark = (screen) => {
       setNavDark(true)
       setsecondContainer(screen)
    }


    return (
        <div className={navDark? 'containerDark' : 'container'}>
            {/* <Snow color={navDark===false? '#666666' : '#999999'}/> */}
            <div className='nav-bar'>
                <div className='logo' onClick={()=>{
                    setNavDark(false)
                    setsecondContainer('Home');
                    }}>{navDark === true ? <img className='logo-img' src={owlLight} /> : <img className='logo-img' src={owlDark} /> }</div>
                    <div className={navDark ? 'nav-links-dark':'nav-links'}> 
                        <a   href='#' onClick={() => switchToDark('Design')}>Design</a>
                        <a   href='#' onClick={() => switchToDark('Wordpress')}>Wordpress</a>
                        <a   href='#' onClick={switchToDark}>MERN</a>
                    </div>
                </div>
                {/* Paste After This */}
                {secondContainer ==='Home'? <Landing/> : secondContainer === 'Design' ? <Design /> : secondContainer ==='Wordpress' ? <Wordpress /> : <Mern />}
                        
            {/* Paste Before This */}
            <div className={navDark ? 'contact-dark':'contact'}><div className='user-info'> <p>| +923485516445 | </p>           <p> iamsaimsheikh@gmail.com | </p>     </div>    
              <div className='user-links'>
             <a href='https://www.fiverr.com/iamsaimsheikh?' ><img src={GLogo}  height={20} width={20} /></a>     |
             <a href='www.linkedin.com/in/iamsaimsheikh' > <img src={LLogo} height={20} width={20}/> </a>        |
             <img src={VLogo} height={20} width={20}/> 
             <a href='https://www.instagram.com/thevecstacy/' > The Vecstacy</a>
             </div>
             </div>
        </div>
        
    )
}

export default Home

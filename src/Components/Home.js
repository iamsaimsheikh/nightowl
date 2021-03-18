import React,{useState} from 'react'
import '../../src/App.css'
import FLogo from '../Content/fiver-logo.png'
import VLogo from '../Content/vecstacy-logo.png'
import Landing from './Landing'
import Design from './Design'
import Snow from './Snow'


function Home() {
    
    const [secondContainer,setsecondContainer] = useState('Home');
    const [navDark,setNavDark] = useState(false)

    const switchToDark = (screen) => {
       setNavDark(true)
       setsecondContainer(screen)
    }


    return (
        <div className={navDark? 'containerDark' : 'container'}>
            <Snow color={navDark===false? '#666666' : '#f7f7f7'}/>
            <div className='nav-bar'>
                <div className='logo' onClick={()=>{
                    setNavDark(false)
                    setsecondContainer('Home');
                    }}></div>
                    <div className={navDark ? 'nav-links-dark':'nav-links'}> 
                        <a   href='#' onClick={() => switchToDark('Design')}>Design</a>
                        <a   href='#' onClick={switchToDark}>Wordpress</a>
                        <a   href='#' onClick={switchToDark}>MERN</a>
                    </div>
                </div>
                {/* Paste After This */}
                {secondContainer ==='Home'? <Landing/> : <Design />}
                        
            {/* Paste Before This */}
            <div className={navDark ? 'contact-dark':'contact'}>+923485516445    |        iamsaimsheikh@gmail.com      |    
              <img src={FLogo} height={17} width={17}/>   
             <a href='https://www.fiverr.com/iamsaimsheikh?' >   Fiverr</a>   |
               <img src={VLogo} height={15} width={17}/> 
             <a href='https://www.instagram.com/thevecstacy/' > The Vecstacy</a>
             </div>
        </div>
        
    )
}

export default Home

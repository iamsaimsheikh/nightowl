import React,{Component, useEffect,useState} from 'react'
import '../../src/App.css'
import Ester from '../Content/Portraits/ester [Recovered]-01.jpg'
import Junaid from '../Content/Portraits/junaid [Recovered]-01.jpg'
import Qurat from '../Content/Portraits/qurat-final-01.jpg'
import Tajammul from '../Content/Portraits/t-tajjamul-01-01.png'
import Tanzeel from '../Content/Portraits/tanzeel-01.jpg'
import Najeeba from '../Content/Portraits/Najeeba.jpg'
import Snow from './Snow'



function Design() {

    
    const [images,setImages] = useState(
        [
            {
                id:0,
                previous:Tanzeel,
                current:Ester,
                next:Junaid,
            },
            {
                id:1,
                previous:Ester,
                current:Junaid,
                next:Qurat,
            },
            {
                id:2,
                previous:Junaid,
                current:Qurat,
                next:Tajammul,
            },
            {
                id:3,
                previous:Qurat,
                current:Tajammul,
                next:Tanzeel,
            },
            {
                id:4,
                previous:Tajammul,
                current:Tanzeel,
                next:Najeeba,
            },
            {
                id:5,
                previous:Tanzeel,
                current:Najeeba,
                next:Ester,
            },
    
        ]
    
    )

    const [index,setIndex] = useState(2);
    

    


    return (
        <div className="secondContainer" onLoad={setTimeout(() => {
            
        }, 2000)}>
            
            <div className='portraitContainer' id='portraitContainer' >
                
                <div className='img-div'>
                    <img src={images[index].previous} />
                </div>
                <div className="logicSign" onClick={() => {

                        if(index == images.length -1){
                            setIndex(0);
                        }
                        else{
                            setIndex(prevIndex => prevIndex + 1);
                        }

                        var portraitContainer = document.getElementById('portraitContainer')
                            portraitContainer.replaceWith(portraitContainer)
                                  
                    }}>
                &lt;
                </div>
                <div className='img-div-center' >
                    <img src={images[index].current} id='img-div-center'  />
                </div >
                <div className='logicSign' onClick={() => { 
                    
                    if(index == 0){
                        setIndex(4);
                    }
                    else{
                        setIndex(prevIndex => prevIndex - 1);
                    }

                        var portraitContainer = document.getElementById('portraitContainer')
                            portraitContainer.replaceWith(portraitContainer)       
                    }}>
                &gt;
                </div>
                <div className='img-div'>
                    <img src={images[index].next}/>
                </div>    
                
                

                 </div>
                 
            
                 
        </div>
        
    )
}

export default Design


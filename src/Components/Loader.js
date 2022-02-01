import React from 'react';
import owlDark from '../Content/owlLight.png'

function Loader() {
  return <div className='loader-container'>
      <img src={owlDark} className='owl'/>
      <div className='loadbar-container'>
          <div className='loadbar lOne'></div>
          <div className='loadbar lTwo'></div>
          <div className='loadbar lThree'></div>
      </div>
  </div>;
}

export default Loader;

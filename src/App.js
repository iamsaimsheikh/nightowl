import {useState} from 'react'
import logo from './logo.svg';
import Home from './Components/Home'
import Loader from './Components/Loader';

import './App.css';

function App() {

  const [load,setLoad] = useState(false)

  const myTimeout = setTimeout(() => setLoad(true), 5000);




  return (
    <div className="App">

      {load === false ? <Loader /> : <Home />}
       
    </div>
  );
}

export default App;

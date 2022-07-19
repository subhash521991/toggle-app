import logo from './logo.svg';
import './App.css';

import {useState} from 'react'

function App() {

  const [status, setStatus] = useState(true);

   const show = ()=>{
    setStatus(true);

   }
   const hide = ()=>{

    setStatus(false);
  }

  const toggle = ()=>{
   setStatus(!status);
    
  }

console.log(status);
  return (
    <div className="App">
     {

     status? <div>
     <h1>Toggle Example</h1>
     <img src={logo} className="App-logo" alt="logo" />
     </div>:null

     }
     

      <button onClick={()=>show()}>Show</button>
      <button onClick={()=>hide()}>Hide</button>
      <button onClick={()=>toggle()}>Toggle</button>
    </div>
  );
}

export default App;
 
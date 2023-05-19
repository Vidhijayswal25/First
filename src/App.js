
import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
//import Practice from './practice';
import Registration from './registration';
import Login from './login'
// import Hook1 from './hook1';
//import Incr from './incr';
// import Practice2 from './practice2';

function App() {
  
  const[isregister,setRegister] = useState(true)
  const isLogged=()=>{
        console.log(false);
        setRegister(false)
  }
  return (
    <div >
     {/* <Registration/> */}
     {/* <Login/> */}
    
    {isregister ? <Registration isLogged={isLogged} /> : <Login/>}
    {/* <Registration/> */}
    </div>
  );
}

export default App;

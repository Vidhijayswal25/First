
import React,{useState} from 'react';

import './registration.css';
function Registration(props){
  

  const [Name,setName] = useState();
  const [Email,setEmail] = useState();
  const [City,setCity] = useState();
  const [Contact,setContact] = useState();
  const [Password,setPassword] = useState();
  const changeName=(e)=>{
        setName(e.target.value);
  }

  const changeEmail=(e)=>{
    setEmail(e.target.value);
}
const changeCity=(e)=>{
  setCity(e.target.value);
}
const changeContact=(e)=>{
  setContact(e.target.value);
}
const changePassword=(e)=>{
  setPassword(e.target.value);
}
console.log(Name,Email,City,Contact,Password)

const isLogin=()=>{
      props.isLogged();
}

const handleSubmitClick =()=>{
  localStorage.setItem('Name',Name)
  localStorage.setItem('Password',Password)
 
}
 return(
    
 

    <>
    <div class="row">
      <div class="col" col-sm-12 col-md-6 >
    <form class="form">
      <fieldset>
        <legend>Registration</legend>
        <div class="mb-3">
          <label for="User Name" class="form-label">User Name</label>
          <input type="text"  class="form-control" onChange={(e)=>changeName(e)} placeholder="User Name" />
        </div>
        <div class="mb-3">
          <label for="Email-id" class="form-label">Email-id</label>
          <input type="text"  class="form-control"onChange={(e)=>changeEmail(e)}  placeholder="UEmail-id"/>
        </div>
        <div class="mb-3">
          <label for="City" class="form-label">City</label>
          <input type="text"  class="form-control" onChange={(e)=>changeCity(e)} placeholder="City" />
        </div>
        <div class="mb-3">
          <label for="contact" class="form-label">contact</label>
          <input type="text"  class="form-control" onChange={(e)=>changeContact(e)} placeholder="contact" />
        </div>
        
        <div class="mb-3">
          <label for="Password" class="form-label">Password</label>
          
          <input type="text" id="disabledTextInput"onChange={(e)=>changePassword(e)} class="form-control" placeholder="Password" />
        </div>

        

        
        <button type="button" class="btn btn-secondary" onClick={()=>handleSubmitClick()}>Submit</button>
        <button type="button" class="btn btn-secondary" onClick={()=>isLogin()}>Login</button>
      </fieldset>
    
    </form>
  </div>
  </div>
  {/* <h1>Name :{Name}</h1>
  <h1>Email :{Email}</h1>
  <h1>City :{City}</h1>
  <h1>Contact :{Contact}</h1>
  <h1>Password :{Password}</h1> */}
    </>
)
}

export default Registration
import React,{useState} from 'react'
import './registration.css'

function Login() {
    const [logName,setLogIn] = useState()
    const [logPassword,setLogPassword] = useState()
    const changetext=(e,type)=>{
          if(type === "loginName")
          {
            setLogIn(e.target.value)
          }
          else{
            setLogPassword(e.target.value)
          }
    }
   
        console.log(logName,logPassword)


       const handleLogin =()=>{
        let username =localStorage.getItem('Name')
        let username1 =localStorage.getItem('Password')
        if(logName === username && logPassword === username1){
          console.log("log in sucess")
        }
        else{
          console.log("login fail")
        }
       }

  return (
    <>
    <div class="container">
        <div class="row" >
            {/* <div class="col" col-sm-12 col-md-6> */}
            {/* <div class="img">
                
                <img src="https://img.freepik.com/premium-photo/laptop-with-blank-screen-grey-background-mockup-template-copy-space-picture-advertisment_645374-2608.jpg" alt="" />
              </div> */}
            {/* </div> */}
          <div class="col" col-sm-12 col-md-6 >
            <form class="form">
                <fieldset >
                  <legend>Log In</legend>
                  <div class="mb-3">
                    <label for="User Name" class="form-label">User Name</label>
                    <input type="text"  class="form-control" onChange={(e)=>changetext(e,"loginName")} placeholder="User Name"/>
                  </div>
                  <div class="mb-3">
                    <label for="Password" class="form-label">Password</label>
                    
                    <input type="text"  class="form-control" onChange={(e)=>changetext(e,"loginPassword")} placeholder="Password"/>
                  </div>
                  
         
                 
                  <button type="button" class="btn btn-secondary" onClick={()=>handleLogin()}>Login</button>
                </fieldset>
              </form>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Login
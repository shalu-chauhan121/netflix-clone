import React, { useState } from 'react';
import "./Login.css"
import logo from '../../assets/logo.png'
import {login,signup} from '../../firebase'
const Login = () => {
  const [signState,setsignState]=useState("Sign In");
  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");

  const user_auth=async(event)=>{
    event.preventDefault();
    if(signState==="Sign In"){
      await login(email,password);
    }else {
      await signup(name,email,password);
    }
  }

  let signIn=()=>{
    setsignState("Sign In");
  }
  let signUp=()=>{
    setsignState("Sign Up");
  }


  return (
    <div className='login'>
     <img src={logo} alt=""></img>
     <div className="login-page">
      <h1>{signState}</h1>
      <form className='form'>
        {signState==="Sign Up"?  <input type='text' placeholder='Your name'
         value={name} onChange={(e)=>{setname(e.target.value)}}
        ></input>:<></>}
      
        <input type='text' placeholder='Email'
        value={email} onChange={(e)=>{setemail(e.target.value)}}
        ></input>
        <input type='password' placeholder='Password'
        value={password} onChange={(e)=>{setpassword(e.target.value)}}
        ></input>
          <button onClick={user_auth} type='submit' >{signState}</button>
      </form>
      <div className="help">
        <div className="remember">
          <input id='remember' type='checkbox'></input>
          <label htmlFor='remember'>Remember Me</label>
        </div>
        <p>Need Help?</p>
      </div>
      <div className="navigate-btn">
        {
          signState==="Sign In"?  <div className="navigate">
          <p>New to Netflix?</p>
          <button onClick={signUp}>Sign Up Now</button>
          </div>:
       <div className="navigate">
       <p>Already have account</p>
       <button onClick={signIn}>login</button>
       </div>
        }
    
       </div>
     </div>
    </div>
    
   
  );
}

export default Login;

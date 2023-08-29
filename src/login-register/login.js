import React, { useContext, useEffect, useState } from 'react'
import "./login.css"
import { toast,ToastContainer } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
import { Login_context } from '../login-contexts';





const Login = () => {
  const [username, setUsername] = useState("");
  const [userpassword, setUserpassword] = useState("");
  const[registerdata,setRegisterdata]=useState("")
  const navigate=useNavigate()
  const[logindata,setLogindata]=useContext(Login_context)

  useEffect(()=>{
    setRegisterdata(JSON.parse(localStorage.getItem("userdata")))
  },[])
 
const handlelogin=(e)=>{
  e.preventDefault()
  console.log(registerdata)

  
  if(username===""||userpassword===""){
    toast.error("Please Enter Username and Password",{position:toast.POSITION.TOP_RIGHT,autoClose:1500})

  }
  else{
    if(username!=registerdata.email || userpassword!=registerdata.password){
    toast.error("Please Enter valid Username and Password",{position:toast.POSITION.TOP_RIGHT,autoClose:1500})

    }
    else{
    toast.success("Login successfully",{position:toast.POSITION.TOP_RIGHT,autoClose:1000})
    setLogindata({username:username,password:userpassword})
    
    navigate("/")

    }
    

}
}


  return (
    <div className='login-main'>
      <ToastContainer></ToastContainer>
      <form className='login-form' onSubmit={handlelogin}>
      <label htmlFor="username">Username : </label><br></br>
        <input
          type="text"
          placeholder="Enter Your Email"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input><br></br><br></br>
          <label htmlFor="password">Password : </label><br></br>
        <input
          type="password"
          placeholder="Enter Your Password"
          name="password"
          value={userpassword}
          onChange={(e) => setUserpassword(e.target.value)}
        ></input><br></br><br></br>
        <button className='login-btn'>Login</button>
        <p className='text-center mt-3'>if you not Registered Please <span className='register-link text-primary' onClick={()=>{
          navigate("/register")
        }}>Register</span></p>
        
      </form>
      <div className='right-part'></div>
    </div>
  )
}

export default Login

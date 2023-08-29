import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Login_context } from '../login-contexts'

const Protected = (props) => {
    const {Component}=props
    const navigate=useNavigate()
    const [logindata,setLogindata]=useContext(Login_context)

    useEffect(()=>{
        if(logindata==""){
            navigate("/login")
          

        }
    },[])
  return (
    <div>
    
   
        <Component></Component>
       
      
    </div>
  )
}

export default Protected

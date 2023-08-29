import React, { createContext, useState } from 'react'

export const Login_context=createContext()

export const Logincontexts = (props) => {
const [logindata,setLogindata]=useState("")

  return (
    <Login_context.Provider value={[logindata,setLogindata]}>
        {props.children}
    </Login_context.Provider>

    
  )
}



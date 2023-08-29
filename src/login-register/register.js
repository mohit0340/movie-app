import React, { useState } from "react";
import "./register.css"
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [userpassword, setUserpassword] = useState("");
  const [confirmuserpassword, setConfirmuserpassword] = useState("");

  const navigate=useNavigate()


  const handleregister=(e)=>{
    e.preventDefault();
    if(username==="" || useremail==="" || userpassword==="" || confirmuserpassword===""){
      toast.error("Please Enter Data in All Field",{position:toast.POSITION.TOP_LEFT,autoClose:1500})
      
    }
    else{
      if(userpassword.length<8){
      toast.error("Password must 8 digit",{position:toast.POSITION.TOP_LEFT,autoClose:1500})


      }
      else if(confirmuserpassword!=userpassword){
      toast.error("Please Conform valid Password",{position:toast.POSITION.TOP_LEFT,autoClose:1500})


      }
      
      else{
     return(  localStorage.setItem("userdata",JSON.stringify({name:username,email:useremail,password:userpassword})),toast.success("You Registered Successfully",{position:toast.POSITION.TOP_LEFT,autoClose:1000}),
        navigate("/login"))

      }
    }


  }



  return (
    <div className="register-main">
      <ToastContainer></ToastContainer>
      <div className="left-part">

      </div>
      <form className="form" onSubmit={handleregister}>
        <label htmlFor="username">Name : </label><br></br>
        <input
          type="text"
          placeholder="Enter Your Name"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input><br></br><br></br>
        <label htmlFor="useremail">Email : </label><br></br>
        <input
          type="email"
          placeholder="Enter Your Email"
          name="useremail"
          value={useremail}
          onChange={(e) =>setUseremail(e.target.value)}
        ></input><br></br><br></br>
        <label htmlFor="password">Password : </label><br></br>
        <input
          type="password"
          placeholder="Enter Your Password"
          name="password"
          value={userpassword}
          onChange={(e) => setUserpassword(e.target.value)}
        ></input><br></br><br></br>
          <label htmlFor="confirmpassword">Confirm Password : </label><br></br>
        <input
          type="password"
          placeholder="Confirm your Password"
          name="confirmpassword"
          value={confirmuserpassword}
          onChange={(e) => setConfirmuserpassword(e.target.value)}
        ></input><br></br><br></br>
        <button className="register-btn">Register</button>
        <p className=" text-center">If you already Registered go to <span className="login-link text-primary" onClick={()=>{navigate("/login")}}>LOGIN</span> </p>
      </form>
      
    </div>
  );
};

export default Register;

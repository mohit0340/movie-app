import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Upcoming from './components/upcoming';
import Protected from './components/protected';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import Login from './login-register/login';
import Register from './login-register/register';
import { Navbar } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import {Logincontexts} from './login-contexts';
import Movie_preview from './components/movie-preview';
import Top_rated from './components/toprated';
import 'react-loading-skeleton/dist/skeleton.css'
import logo from "./assets/logo111-removebg-preview.png"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Logincontexts>
    <BrowserRouter>
    <nav className='nav-main d-flex'>
      <div className='nav-title'>
        <img src={logo} height={30} width={150}></img>
      {/* <p className='fs-3 fw-bold text-danger' >Flix Movies</p> */}
      </div>
     
      <div className='navlink-main'>
        
    <Link className='Link'  to="/">Home</Link>
    <Link className='Link'  to="/upcoming">Upcoming</Link>
    <Link className="Link" to="/toprated">Top Rated</Link>

    <Link className="Link"to="/login">Login</Link>
     <Link className="Link" to="/register">Register</Link>



    </div>
    </nav>
    <Routes>
      <Route path='/' element={<Protected Component={App}/>}></Route>
      <Route path='/protected' element={<Protected/>}></Route>
      <Route path='/upcoming' element={<Protected Component={Upcoming}/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      

      <Route path='/movie-preview/:id' element={<Movie_preview/>}></Route>
      <Route path='/toprated' element={<Protected Component={Top_rated}/>}></Route>


    

    </Routes>
    </BrowserRouter>
    </Logincontexts>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import './components/home.css'
import logobird from'./components/images/logobird.jpg'
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Courses from "./components/Courses";
import Placementcell from "./components/placementcell";
import Knownscopeindia from "./components/knownaboutscope";
import Contactus from "./components/contactus";
import Registration from "./components/registration";

export default function App  () {
  return (
   
  <div className="color " >
  <div className='home' >
    <nav class="navbar navbar-expand-lg navbar-dark navcolor">
  <div class="container-fluid">
    <a class="navbar-brand d-lg-none" href="#"><img src={logobird} alt='' style={{width:"50px",height:"50px"}}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to={"/"} class="nav-link "  href="#">Home</Link>
        </li>
        <li class="nav-item">
        <Link to={"/courses"}class="nav-link " href="#">courses</Link>
        </li>
        <li class="nav-item">
        <Link to={"/placementcell"} class="nav-link "  href="#" >placement cell</Link>
        </li>
      </ul>
      <a class="navbar-brand d-none d-lg-block" href="#">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img className="logo" src={logobird} alt='' style={{width:"50px",height:"50px"}}/></a>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li class="nav-item">
      <Link to={"/knownaboutscope"} class="nav-link " href="#" >known about scope</Link>
        </li><li class="nav-item">
        <Link to={"/contactus"} class="nav-link " href="#" >contact us</Link>
        </li><li class="nav-item">
        <Link to={"/registernow"}><button type="button" class="buttonheader">register now</button></Link>
        </li>
        </ul>
    </div>
  </div>
</nav>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/courses' element={<Courses/>}/>
  <Route path='/placementcell' element={<Placementcell/>}/>
  <Route path='/knownaboutscope' element={<Knownscopeindia/>}/>
  <Route path='/contactus' element={<Contactus/>}/>
  <Route path='/registernow' element={<Registration/>}/>
</Routes>

    </div>
  </div>



 
  );
}





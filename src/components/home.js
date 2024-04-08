import React from 'react'
import caro1 from './images/homemoving1.png'
import caro2 from './images/homemoving2.png'
import caro3 from './images/homemoving3.png'
import caro4 from './images/homemoving4.png'
import caro5 from './images/homemoving5.png'
import stars from './images/5star.png'
import '../App.css'
import icon1 from './images/homeicon1.png'
import icon2 from './images/homeicon2.png'
import icon3 from './images/homeicon3.png'
import icon4 from './images/homeicon4.png'
import homephoto from './images/logohomepage.png'
import footerimage from './images/homefooter.png'
import isologo from './images/isologo.png'
import '../components/home.css'
import { Link, Route, Routes } from 'react-router-dom'
import Courses from './Courses'
import Placementcell from './placementcell'
import Registration from './registration'
export default function Home() {
  return (
    <>
  <div class="text-white">
        <div class="star homecolor" >
          <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>

      <div>
        <a><img src={homephoto} style={{width:"50%"}} /></a>
        <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />




      </div>

      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" style={{width:"70%",height:"40%", display:"flex",marginLeft:"auto",marginRight:"auto"}}>
  <div class="carousel-indicators ">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img style={{height:"45%"}} src={caro1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{height:"45%"}} src={caro2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{height:"45%"}} src={caro3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{height:"15%"}} src={caro4} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{height:"45%"}} src={caro5} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>

      <div  class="card align-item-center bg-dark text-white col-sm-10 container d-flex justify-content-center"style={{border:"none"}} >
        <div class="card" style={{border:"none"}}>
        

          <div className=' card homebuttons'style={{border:"none"}}>
          <div></div>
          <div className="star"><img  style={{width:"300px"}} src={stars}/>
    <p>Google 4.9 * Rated institute</p>
    <h1><b>SCOPE INDIA, your career partner!</b></h1>
    <h4>One of the best Training Destination for Software, Networking and Cloud Computing courses in India with 17 years of Industrial experience.</h4>
    <p style={{textAlign:"left"}}>Software, Networking, and Cloud Professional Education Centre in Kerala from Suffix E Solutions with WORKING PROFESSIONALS oriented on-the-job TRAINING model. SCOPE INDIA provides courses for <b>Software Programming</b> in Python (Data Science 
      | Artificial Intelligence | Machine Learning | Deep Learning, Data Analytics), Java, PHP, .Net, <b>Software Testing</b> Manual and Automation, <b>Cloud Computing</b> (AWS | Azure), <b>Server Administration</b> (MCSE | RHCE), <b>Networking</b> (CCNA), <b>Mobile App Development</b> in Flutter,
       and <b>Digital Marketing</b>. Training with 100% Trusted Job Based Internship Model. SCOPE INDIA has a Strong Placement Cell that provides jobs to thousands of students every year. We assure you, you won't regret it after training from SCOPE INDIA!
    </p>
<br/>
<p style={{textAlign:"left"}}>This is how SCOPE INDIA can support both newbies and experienced in the industry to upgrade their skills.</p>
    </div>

<button className='homebutton1'><Link to={"/placementcell"} class="nav-link "><h5>Recent placement</h5></Link></button>
<br/>
<button className='homebutton2'><Link to={"courses"} class="nav-link "><h5>courses</h5> </Link></button>
<br/>
<button className='homebutton3'><Link to={"/registernow"} class="nav-link " ><h5>Register Now!</h5></Link></button>
<br/>
<button className='homebutton4'><h>Chat on Whatsapp</h></button>

<Routes>
  <Route  element={<Courses/>}/>
  <Route path='/placementcell' element={<Placementcell/>}/>
  <Route path='/registernow' element={<Registration/>}/>
</Routes>


</div>
<br/>
<br/>
          <div >
            <div class="row">
              <div class="col-sm-3">
                <div class="card homebuttons underline " style={{border:"none"}}>
                  <div class="card-body ">
                    <div className='homeicons '><img src={icon1} /></div>
                    <br/>
                    <h2 className='homefont'>Training</h2>
                    <p class="card-text">You are the trained under the suffix E solutions working professionals,on-the-job training models</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card homebuttons underline" style={{border:"none"}}>
                  <div class="card-body">
                    <div className='homeicons'><img src={icon2} /></div>
                    <br/>
                    <h2 className='homefont'>Intership</h2>
                    <p class="card-text">After course completion,you will be proceeded to live projects with a 6 months experiance certificate</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card homebuttons underline" style={{border:"none"}}>
                  <div class="card-body">
                    <div className='homeicons'><img src={icon3}  style={{width:'65px'}}/></div>
                    <br/>
                    <h2 className='homefont'>Grooming</h2>
                    <p class="card-text">CV   preparation, interview preparaion,and  personality development</p>
                    &nbsp;
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card homebuttons underline" style={{border:"none"}}>
                  <div class="card-body">
                    <div className='homeicons'><img src={icon4} /></div>
                    <br/>
                    <h2 className='homefont'>Placement</h2>
                    <p class="card-text">Give 100% free placement support to all our fellow techies through scope INDIA's placement cell</p>
                  </div>
                </div>
              </div>
            </div>
            
  
          </div>
          </div>
</div>


      </div>


      <div className='navcolor star' style={{display:""}}>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='container d-flex justify-content-center '> 
      <div class="col-sm-4">
                
                  <div class="card-body">
                    <br/>
                    <br/>
                    <h1 className='homefont footercolor'>1000+</h1>
                    <h5 class="card-text "><p className='homefont' style={{color:"#fff"}}>STUDENTS ARE</p><p className='homefont' style={{color:"#fff"}}>TRAINED EVERY YEAR</p></h5> 
                    

                    &nbsp;
                  
                </div>
              </div>
              <div class="col-sm-4">
                
                  <div class="card-body">
                    <h1 className='homefont footercolor'>30+</h1>
                    <h5 class="card-text "><p className='homefont' style={{color:"#fff"}}>COMPUTER COURSES</p></h5>
                    &nbsp;
                  
                </div>
              </div>
              <div class="col-sm-4">
                
                  <div class="card-body">
                  <br/>
                  <br/>
                    <h1 className='homefont footercolor'>95%</h1>
                    <h5 class="card-text "><p className='homefont' style={{color:"#fff"}}>STUDENTS ARE GETTING</p><p className='homefont' style={{color:"#fff"}}>PLACED EVERY YEAR</p></h5>
                    &nbsp;
                  
                </div>
              </div>
</div>

        
        <img src={footerimage} style={{width:"45%"}} />
        <h6 style={{color:"#fff"}}>Center for Software, Networking, & Cloud Education</h6>
        <h6 style={{color:"#fff"}}>Kerala: Technopark TVM | Thampanoor TVM | Kaloor Kochi, Tamil Nadu: Distillery Road | Palace Road Nagercoil</h6>
        <br/>
        <br/>
        <img src={isologo} style={{width:"30%",height:"20%"}}/>
        <br/>
        <br/>
        <h6 style={{color:"#fff"}}>An ISO 9001:2015 Certified Company</h6>
        <br/>
        <h6 style={{color:"#fff"}}>All Rights Reserved Suffix E Solutions © 2007-2024</h6>
        <br/>
        <h6 style={{color:"#fff"}}>9745936073 (TPK)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9745936073 (TVM)&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         7592939481 (EKM)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8075536185 (NGL)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; info@scopeindia.org</h6>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      </div>
      
    
    </>
  )
}

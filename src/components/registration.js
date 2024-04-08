import React, { useState } from 'react'
import { FaMapMarked,FaPaperclip,FaPhone} from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"
import footerimage from './images/homefooter.png'
import isologo from './images/isologo.png'
import card from './images/black1.jpg'
export default function Registration() {

  const [Data,setData]=useState({
    fullname:"",
    dateofbirth:"",
    gender:"",
    education:"",
    courses:"",
  })
  const handleinputchange=(e)=>{
    setData({...Data,[e.target.id]:e.target.value})
  }
  const handleSubmit =(e)=>{
    e.preventfault();
  }
  return (
    <>
      <div class="card bg-dark text-white">
        <div class="card" style={{backgroundColor:"blue"}}>
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
          <div className='header'><h1 style={{color:"orange"}}><b>Registration</b></h1>
            <h3 style={{color:"white"}}><b>it's just a matter of 80 daysto an IT job!</b></h3>
            <br />
            <br />
          </div>
          <div className='container d-flex justify-content-center' >
            <div className="card bg-dark col-sm-12  ">
              <div class="card" style={{backgroundColor:""}}>

                <div class="row align-item-center justify-content-center">
                  <div class="col-sm-5">
                    <div class="card" >
                      <div class="card-body">
                        <form onSubmit={handleSubmit}>
                          <label for="fullname" ><b>Full name (required)</b></label><br />
                          <input type='text' className='form-control mb-2 call_back_from_ele' id='fullname'onChange={handleinputchange} /><br />
                          <label for="dateofbirth"><b>Date of Birth (required)</b></label><br />
                          <input type='date'className='form-control mb-2 call_back_from_ele' id='dateofbirth' onChange={handleinputchange}/><br />
                          <label><b>Gender (required)</b></label><br />
                          <label for='gender'><b>Male</b></label>
                          <input type='radio' name='gender' id='male' value='male' onChange={handleinputchange} />
                          <label for='gender'><b>Female</b></label>
                          <input type='radio' name='gender' id='female' value='female' onChange={handleinputchange} />
                          <label for='gender'><b>Other</b></label>
                          <input type='radio' name='gender' id='other' value='other' onChange={handleinputchange}/><br />
                          <label for="education"><b>Educational Qualification</b></label><br />
                          <input type='text'className='form-control mb-2 call_back_from_ele' id='education' onChange={handleinputchange} /><br />
                          <label for="courses"><b>Choose your courses(required)</b></label><br />
                          <select id='courses'className='form-control mb-2 call_back_from_ele'onChange={handleinputchange} >
                            <option value='courses'>Choose your courses!</option>
                            <option value='PHP Full Stack'>PHP Full Stack</option>
                            <option value='PYTHON Full Stack'>PYTHON Full Stack</option>
                            <option value='JAVA Full Stack'>JAVA Full Stack</option>
                            <option value='MEAN Full Stack'>MEAN Full Stack</option>
                            <option value='MERN Full Stack'>MERN Full Stack</option>
                            <option value='C#.NET Core 7Full Stack'>C#.NET Core 7Full Stack</option>
                            <option value='Data Science & AI(Python Guru)'>Data Science & AI(Python Guru)</option>
                          </select>
                          <br /><br />
                          <br />
                          <label for="mobilenumber"><b>Mobile Number(required)</b></label><br />
                          <input type='text' className='form-control mb-2 call_back_from_ele' id='fullname' /><br />
                          <label for="email"><b>Email(required)</b></label><br />
                          <input type='email' className='form-control mb-2 call_back_from_ele' id='fullname' /><br />
                          <label for="guardiansmobile"><b>Guardian's Mobile(required)</b></label><br />
                          <input type='text' className='form-control mb-2 call_back_from_ele' id='fullname' /><br />
                          <label><b>Training mode(required)</b></label><br />
                          <label for='trainingmode'><b>Live online</b></label>&nbsp;
                          <input type='radio' name='scopeindialocation' id='liveonline' value='liveonline' />&nbsp;&nbsp;
                          <label for='trainingmode'><b>Classroom</b></label>&nbsp;
                          <input type='radio' name='scopeindialocation' id='classroom' value='classroom' /><br />
                          <label><b>SCOPE INDIA Location(required)</b></label><br />
                          <label for='scopeindialocation'><b>Technopark TVM</b></label>&nbsp;
                          <input type='radio' name='scopeindialocation' id='Technopark TVM' value='Technopark TVM' />&nbsp;&nbsp;
                          <label for='scopeindialocation'><b>Tampanoor TVM</b></label>&nbsp;
                          <input type='radio' name='scopeindialocation' id='Tampanoor TVM' value='Tampanoor TVM' />&nbsp;&nbsp;
                          <label for='scopeindialocation'><b>Kochi</b></label>&nbsp;
                          <input type='radio' name='scopeindialocation' id='Kochi' value='Kochi' />&nbsp;&nbsp;
                          <label for='scopeindialocation'><b>Nagarcoil</b></label>&nbsp;
                          <input type='radio' name='scopeindialocation' id='Nagarcoil' value='Nagarcoil' />&nbsp;&nbsp;
                          <label for='scopeindialocation'><b>Online</b></label>&nbsp;
                          <input type='radio' name='scopeindialocation' id='Online' value='Online' />
                          <br />
                          <br />
                          <br />
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-5">
                    <div class="card" >
                      <div class="card-body">
                        <form>
                          <label for="GuardiansName"><b>Guardian's Name</b></label><br />
                          <input type='text' className='form-control mb-2 call_back_from_ele' id='GuardiansName' name='GuardiansName' /><br />
                          <label for="Guardiansoccupation"><b>Guardian's occupation</b></label><br />
                          <input type='text'className='form-control mb-2 call_back_from_ele' id='fullGuardiansoccupation' name='Guardiansoccupation' /><br />

                          <br />
                          <label><b>Preferred Training Timings(required)</b></label><br />
                          <input type='checkbox' id='Between7am10am' name='timing' />
                          <label for="Between7am10am"><b>Between 7am - 10am</b></label><br />
                          <input type='checkbox' id='Between9am1pm' name='timing' />
                          <label for="Between9am1pm"><b>Between 9am - 1pm</b></label><br />
                          <input type='checkbox' id='Between1pm6pm' name='timing' />
                          <label for="Between1pm6pm"><b>Between 1pm - 6pm</b></label><br />
                          <input type='checkbox' id='Between6pm10pm' name='timing' />
                          <label for="Between6pm10pm"><b>Between 6pm - 10pm</b></label><br />
                          <br />

                          <label for="Address"><b>Address</b></label><br />
                          <input type='text' className='form-control mb-2 call_back_from_ele' id='Address' name='Address' /><br />
                          <label for="Country"><b>Country</b></label><br />
                          <input type='text'  className='form-control mb-2 call_back_from_ele' id='Country' name='Country' /><br />
                          <label for="State"><b>State</b></label><br />
                          <input type='text' className='form-control mb-2 call_back_from_ele' id='State' name='State' /><br />
                          <label for="City"><b>City</b></label><br />
                          <input type='text'className='form-control mb-2 call_back_from_ele' id='City' name='City' /><br />
                          <label for="pin"><b>PIN/Zip Code</b></label><br />
                          <input type='text'className='form-control mb-2 call_back_from_ele' id='pin' name='pin' /><br />
                          <button type="button" class="button"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Complite Registration&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></button>
                          <br />
                          <br />
                          <br />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          <div className='navcolor' style={{border:"none"}} >

           <div class="card align-item-centertext-white col-sm-10  container d-flex justify-content-center" style={{border:"none"}} >
            <div class="card navcolor" style={{border:"none"}} >
              <h1 class="card-title" style={{color:"white"}}>Locations</h1>


              <div class="row align-item-center justify-content-center">
                <div class="col-sm-5">
                  <div class="card">
                    <div class="card-body">
                      <h2><b>Technopark TVM,Kerala</b></h2>
                      <h6> Opp. Technopark, Trivandrum, Kerala 695581</h6>
                      <h6><FaPhone/>&nbsp; 9745936073</h6>
                      <h6><MdOutlineEmail />&nbsp;technopark@scopeindia.org</h6>
                      <h6> <FaPaperclip />&nbsp;www.scopeindia.org</h6>
                      <h6><FaMapMarked />&nbsp;Location Route Map</h6>
                      <br />
                    </div>
                  </div>
                </div>
                <div class="col-sm-5">
                  <div class="card">
                    <div class="card-body">
                    <h2><b>Thampanoor TVM, Kerala</b></h2>
                    <h6> TC 25/1403/3, Athens Plaza, SS Kovil Road, Thampanoor, Trivandrum, Kerala 695001</h6>
                      <h6><FaPhone/>&nbsp;9745936073</h6>
                      <h6><MdOutlineEmail />&nbsp; info@scopeindia.org</h6>
                      <h6><FaPaperclip />&nbsp; www.scopeindia.org</h6>
                      <h6><FaMapMarked />&nbsp;Location Route Map</h6>
                    
                    </div>
                  </div>
                </div>
               <div><br /></div>
               
                <div class="row align-item-center justify-content-center">
                <div class="col-sm-5">
                  <div class="card">
                    <div class="card-body">
                      <h2><b>Kochi, Kerala</b></h2>
                      <h6>SCOPE INDIA, Vasanth Nagar Rd, near JLN Metro Station, Kaloor, Kochi, Kerala 682025</h6>
                      <h6><FaPhone/>&nbsp;7592939481</h6>
                      <h6><MdOutlineEmail />&nbsp;kochi@scopeindia.org</h6>
                      <h6><FaPaperclip />&nbsp;www.scopeindia.org</h6>
                      <h6><FaMapMarked />&nbsp;Location Route Map</h6>
                    </div>
                  </div>
                </div>
                <div class="col-sm-5">
                  <div class="card">
                    <div class="card-body">
                    <h2><b>Nagercoil, Tamil Nadu</b></h2>
                    <h6>SCOPE INDIA, Near WCC College, Palace Rd, Nagercoil, Tamil Nadu 629001</h6>
                      <h6><FaPhone/>&nbsp; 8075536185</h6>
                      <h6><MdOutlineEmail />&nbsp; ngl@scopeindia.org</h6>
                      <h6><FaPaperclip />&nbsp; www.scopeindia.org</h6>
                      <h6><FaMapMarked />&nbsp;Location Route Map</h6>
                    </div>
                  </div>
                </div>
              </div>
                    
              <div><br /></div>

              <div class="col-sm-5">
                  <div class="card">
                    <div class="card-body">
                    <h2><b>Nagercoil, Tamil Nadu</b></h2>
                    <h6>SCOPE INDIA, Pharma Street, 5/2 Ward 28, Distillery Road, Putheri Nagercoil (Near WCC Jn)</h6>
                      <h6><FaPhone/>&nbsp; 8075536185</h6>
                      <h6><MdOutlineEmail />&nbsp; ngl@scopeindia.org</h6>
                      <h6><FaPaperclip />&nbsp; www.scopeindia.org</h6>
                      <h6><FaMapMarked />&nbsp;Location Route Map</h6>
                    </div>
                  </div>
                </div>
                 
                   
              
               </div> 
             </div>
          </div> 
<br/>
<br/>
<br/>







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

"use client"
// 1. Import Area

import { useState } from "react";
import Swal from "sweetalert2";


// 2. Define Area 
function Home() {
  // 2.1 Hooks Area Here
  const [info,setInfo] = useState("Registration Page")
  const [un,setUn] = useState("")
  const [em,setEm] = useState("")
  const [pwd,setPwd] = useState("")

  // 2.2 Function Defination Area
  let handleChange1 = (e)=>{
    console.log(e.target.value);
    setUn(e.target.value)
  }
  let handleChange2 = (e)=>{
    console.log(e.target.value);
    setEm(e.target.value)
  }
  let handleChange3 = (e)=>{
    console.log(e.target.value);
    setPwd(e.target.value)
  }
  let submitData = async ()=>{ // this is a fatArrow Defination
    console.log('hi');
    let payload ={
      "username": un,
      "email": em,
      "password": pwd
    }
  try {
    const res2 = await fetch(`/api/register`,{
      method: 'POST',
      headers: {
                  'Content-Type': 'application/json',
              },
      body: JSON.stringify(payload),
  });
  const data = await res2.json();
  if(data.data2.data === null){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: data.data2.error.message,
      footer: ''
    })
  }else{
    Swal.fire(
      'Good job!',
      'User Register Successfull',
      'success'
    )
  }
  } catch (error) {
    
  }
  }

  // 2.3 Return Staament
  return (
      <div className="containers">
        
        <div className="card">
          <div className="card-header text-center">
            <h3>{info}</h3>
          </div>
          <div className="card-body">
          <div className="alignment">
            <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">User Name</label>
                  <input name="username" type="email" className="form-control" id="username" onChange={handleChange1}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input name="email" type="email" className="form-control" id="email" onChange={handleChange2}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input name="password" type="password" className="form-control" id="password" onChange={handleChange3}/>
                </div>
            </form>
            </div>
          </div>
          <div className="card-footer text-center">
            <button className="btn btn-primary" onClick={submitData}>Register Now</button>
          </div>
        </div>
      </div>
  )
}
// 3. Export Area
  // 3.1 Default Export
  export default Home;
  // 3.2 Named Export

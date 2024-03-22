import React, { useState } from 'react'
import "./Login.css"
function Login() {
  const [details, setDetails] = useState({
    email: "",
    password: ""
  })
  function handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    setDetails((prev) => {
      return ({
        ...prev,
        [name]: value
      })
    })

  }
  async function handleSubmit(event){
    event.preventDefault();
    const user={
      email:details.email,
      password:details.password
    }
    let response;
    await fetch('http://localhost:4000/login',{
      method:"Post",
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(user)
    }).then((res)=>res.json()).then((data)=>response = data)
    if(response.success){
      alert("Logged In Successfully");
    }
    else{
      if(response.error){
      alert(response.error);
      }
      else{
        alert("Some Error Has Occured.");
      }
    }
  }
  return (
    <div className="login-page">
      <div className='login-body mx-auto rounded-2 shadow'>
        <h1 className='text-center'>Login</h1>
        <div className='login-form'>
          <form className='form-group row m-0' onSubmit={handleSubmit}>
            <div className='col-12'>
            <input type="email" name="email" id="email" className='form-control w-75 mx-auto py-3 my-3' value={details.email} onChange={handleChange} required placeholder='Your Email'/>
            </div>
            <div className='col-12'>
            <input type="password" name="password" id="password" className='form-control w-75 mx-auto py-3 my-3' value={details.password} onChange={handleChange} required placeholder='Password' />
            </div>
            <button className='btn btn-outline-dark w-50 py-3 rounded-5 mx-auto my-4' type = "submit">Login</button>
          </form>
        </div>
        <p className='text-center'>Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  )
}

export default Login
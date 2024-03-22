import React, { useState } from 'react'
import "./SignUp.css"
function SignUp() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
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
  async function addUser(event) {
    event.preventDefault();
    const user = {
      name: details.name,
      email: details.email,
      password: details.password,
    }
    let response;
    await fetch('http://localhost:4000/signup', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then((res) => res.json()).then((data) => response = data);
    if (response.success) {
      alert(`User ${response.name} Added Successfully`);
    }
    else {
      if (response.error) {
        alert(response.error);
      }
      else{
        alert("Some error has occured, please try again later.");
      }
    }
  }
  return (
    <div className="signup-page">
      <div className='signup-body mx-auto rounded-2 shadow'>
        <h1 className='text-center'>Sign Up</h1>
        <div className='signup-form'>
          <form className='form-group row m-0' onSubmit={addUser}>
            <div className='col-12'>
              <input type="name" name="name" id="name" className='form-control w-75 mx-auto py-3 my-3' value={details.name} onChange={handleChange} required placeholder='Your Name' />
            </div>
            <div className='col-12'>
              <input type="email" name="email" id="email" className='form-control w-75 mx-auto py-3 my-3' value={details.email} onChange={handleChange} required placeholder='Your Email' />
            </div>
            <div className='col-12'>
              <input type="password" name="password" id="password" className='form-control w-75 mx-auto py-3 my-3' value={details.password} onChange={handleChange} required placeholder='Password' />
            </div>
            <button className='btn btn-outline-dark w-50 mx-auto py-3 my-4' type='submit'>Sign Up</button>
          </form>
        </div>
        <p className='text-center'>Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  )
}

export default SignUp
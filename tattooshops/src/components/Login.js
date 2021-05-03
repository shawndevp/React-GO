import React, { useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const isAdmin=true;

function Login() {

  const initialValues = {
      email:" ",
      password:""
  }

  const [formValues, setFormValues] = useState(initialValues);
  const [error, setError] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  function handleOnSubmit(e) {
      e.preventDefault();
    axios.post('http://localhost:1337/auth/local', {
    identifier: formValues.email,
    password: formValues.password,
  }).then(response => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
    console.log("user data", response.data);
    setUsername(response.data.user.username)
    setAuthenticated(true);
  }).catch((err)=> {
       console.log(err.response);

       setError("Stämmer inte")

  })

  }

  function handleOnChange(e) {
   setFormValues({...formValues, [e.target.name]:e.target.value})
   
}



  return (
    <>
    {authenticated ? <div>Welcome {username}</div>:
      <div className="flex items-center justify-center">
        <div className="w-full max-w-md">
          <form onSubmit={handleOnSubmit} method="POST" className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
            <div className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
              Login
            </div>
            <h1>{error}</h1>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-normal mb-2"
                for="username"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                v-model="form.email"
                type="email"
                required
                autofocus
                placeholder="Email"
                value={formValues.email}
                onChange={handleOnChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-normal mb-2"
                for="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                v-model="form.password"
                type="password"
                placeholder="Password"
                name="password"
                required
                autocomplete="current-password"
                value={formValues.password}
                onChange={handleOnChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"
                type="submit"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
              <Link to="/register"
                className="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800"
                href="#">Register here</Link>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs"></p>
        </div>
      </div> }
    </>
  );
}

export default Login;

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {

  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");

  const{loading,login}=useLogin();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    await login(username,password)
  }


  return (
    <div className='felx flex-col items-center justify-center min-w-96 mx-auto '>
        <div className='w-full p-6 rounded-lg shodow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3x1 font-semibold text-center text-gray-300'>
                Login
                <span className='text-blue-500 '>&nbsp;&nbsp;ChatApp</span>
            </h1>

            <form onSubmit={handleSubmit}>
              <div>
                <label className='label p-2'>
                    <span className='text-base label-text text-gray-50'>Username</span>
                </label>
                <input type="text" placeholder="Enter Username" className="input input-bordered input-success w-full max-w-xs" 
                value={username}
                onChange={(e)=>setUsername(e.target.value)}/> 
              </div>  
              <div>
              <label className='label'>
                    <span className='text-base label-text text-gray-50'>Password</span>
                </label>
                <input type="password" placeholder="Enter Password" className="input input-bordered input-success w-full max-w-xs" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/> 
              </div>
              <Link to='/signup' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' > {"Dont't"} have an acount?</Link>

              <div>
                <button className='btn btn-block btn-sm mt-2' disabled={loading}>
                  {loading?<span className='loading loading-spinner'></span>:"Login"}
                </button>
              </div>


        </form>

        </div>
    </div>
  )
}

export default Login

//start up code
/*import React from 'react'

function Login() {
  return (
    <div className='felx flex-col items-center justify-center min-w-96 mx-auto '>
        <div className='w-full p-6 rounded-lg shodow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3x1 font-semibold text-center text-gray-300'>
                Login
                <span className='text-blue-500 '>&nbsp;&nbsp;ChatApp</span>
            </h1>

            <form>
              <div>
                <label className='label p-2'>
                    <span className='text-base label-text text-gray-50'>Username</span>
                </label>
                <input type="text" placeholder="Enter Username" className="input input-bordered input-success w-full max-w-xs" /> 
              </div>  
              <div>
              <label className='label'>
                    <span className='text-base label-text text-gray-50'>Password</span>
                </label>
                <input type="text" placeholder="Enter Password" className="input input-bordered input-success w-full max-w-xs" /> 
              </div>
              <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' > {"Dont't"} have an acount?</a>

              <div>
                <button className='btn btn-block btn-sm mt-2'>Login</button>
              </div>


        </form>

        </div>
    </div>
  )
}

export default Login*/


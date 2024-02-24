import React from 'react'
import GenderCheckbox from './GenderCheckbox'

function SignUp() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shodow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-3x1 font-semibold text-center text-gray-300'>
                Signup
                <span className='text-blue-500 '>&nbsp;&nbsp;ChatApp</span>
            </h1>
            <form>
             <div>
                <label className='label p-2'>
                  <span className='text-base label-text'>Full Name</span>
                </label>
                <input type='text' placeholder='John Deo' className='w-full input input-bordered h-10'></input>
              </div>
              <div>
                <label className='label p-2'>
                  <span className='text-base label-text'>Username</span>
                </label>
                <input type='text' placeholder='Johndeo' className='w-full input input-bordered h-10'></input>
              </div>
              <div>
                <label className='label'>
                  <span className='text-base label-text'>Password</span>
                </label>
                <input type='text' placeholder='Enter Password' className='w-full input input-bordered h-10'></input>
              </div>
              <div>
                <label className='label'>
                  <span className='text-base label-text'>Confirm Password</span>
                </label>
                <input type='text' placeholder='Confirm Password' className='w-full input input-bordered h-10'></input>
              </div>
              {/*GENDER CHECKBOX GOES HERE*/}
              <GenderCheckbox></GenderCheckbox>

              <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-1 inline-block' > {"Dont't"} have an acount?</a>

              <div>
                <button className='btn btn-block btn-sm mt-2 border-slate-700'>Signup</button>
              </div>

      </form>

      </div>
      
     
    </div>
  )
}

export default SignUp

//start up code
/*import React from 'react'
import GenderCheckbox from './GenderCheckbox'

function SignUp() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shodow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-3x1 font-semibold text-center text-gray-300'>
                Signup
                <span className='text-blue-500 '>&nbsp;&nbsp;ChatApp</span>
            </h1>
            <form>
             <div>
                <label className='label p-2'>
                  <span className='text-base label-text'>Full Name</span>
                </label>
                <input type='text' placeholder='John Deo' className='w-full input input-bordered h-10'></input>
              </div>
              <div>
                <label className='label p-2'>
                  <span className='text-base label-text'>Username</span>
                </label>
                <input type='text' placeholder='Johndeo' className='w-full input input-bordered h-10'></input>
              </div>
              <div>
                <label className='label'>
                  <span className='text-base label-text'>Password</span>
                </label>
                <input type='text' placeholder='Enter Password' className='w-full input input-bordered h-10'></input>
              </div>
              <div>
                <label className='label'>
                  <span className='text-base label-text'>Confirm Password</span>
                </label>
                <input type='text' placeholder='Confirm Password' className='w-full input input-bordered h-10'></input>
              </div>
              {/*GENDER CHECKBOX GOES HERE}
              <GenderCheckbox></GenderCheckbox>

              <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-1 inline-block' > {"Dont't"} have an acount?</a>

              <div>
                <button className='btn btn-block btn-sm mt-2 border-slate-700'>Signup</button>
              </div>

      </form>

      </div>
      
     
    </div>
  )
}

export default SignUp*/

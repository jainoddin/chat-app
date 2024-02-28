import React, { useState } from 'react'
import {IoSearchSharp} from "react-icons/io5"
import useConversation from '../../zustand/useConversation';
import useGetConversation from '../../hooks/useGetConversation';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [Search,setSearch]=useState("");
  const {setSelectedConversation}=useConversation();
  const {conversations}=useGetConversation()


  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!Search)return;
    if(Search.length<3){
      return toast.error('Search term must be at least 3 characters long')
    }
    const conversation=conversations.find((c)=>c.fullName.toLowerCase().includes(Search.toLowerCase()));
    if(conversation){
      setSelectedConversation(conversation);
      setSearch('');

    }else toast.error("No such user found!")
  }



  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input type='text' placeholder='Search' className='input input-bordered rounded-full'
        value={Search}
        onChange={(e)=>setSearch(e.target.value)}
        ></input>
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
            <IoSearchSharp className='w-6 h-6 outline-none'/>
        </button>
    </form>
  )
}

export default SearchInput

//start code
/*import React from 'react'
import {IoSearchSharp} from "react-icons/io5"

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type='text' placeholder='Search' className='input input-bordered rounded-full'></input>
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
            <IoSearchSharp className='w-6 h-6 outline-none'/>
        </button>
    </form>
  )
}

export default SearchInput*/

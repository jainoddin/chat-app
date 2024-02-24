import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <SearchInput></SearchInput>
        <div className='divider px-3'></div>
        <Conversations></Conversations>
        {/*<Conversations></Conversations>
        <LogoutButton></LogoutButton>*/}
        <LogoutButton></LogoutButton>
      
    </div>
  )
}

export default Sidebar

//start code
/*import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'

const Sidebar = () => {
  return (
    <div>
        <SearchInput></SearchInput>
        <div className='divider px-3'></div>
        <Conversations></Conversations>
        {/*<Conversations></Conversations>
        <LogoutButton></LogoutButton>}
                <LogoutButton></LogoutButton>

      
    </div>
  )
}

export default Sidebar*/

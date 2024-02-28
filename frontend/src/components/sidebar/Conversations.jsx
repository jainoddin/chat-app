import React from 'react'
import useGetConversation from '../../hooks/useGetConversation'
import Conversation from './Conversation'
import { getRandomEmoji } from '../../utils/emojis';


const Conversations = () => {
  const {loading,conversations}=useGetConversation();
  console.log("CONVERSATION : ",conversations)
  return (
    <div className='py-2 flex-col overflow-auto'>
      {conversations.map((conversation)=>(
        <Conversation
        key={conversation._id}
        conversation={conversation}
        emoji={getRandomEmoji()}
        //lastIdx={idx===conversations.length-1}
        ></Conversation>
      ))}



        {loading?<span className='loading loading-spinner mx-auto'></span>:null}

      
    </div>
  )
}

export default Conversations

//start code
/*import React from 'react'
import Conversation from './Conversation'

const Conversations = () => {
  return (
    <div className='py-2 flex-col overflow-auto'>
        <Conversation></Conversation>
        <Conversation></Conversation>
        <Conversation></Conversation>
        <Conversation></Conversation>
        <Conversation></Conversation>
        <Conversation></Conversation>
        <Conversation></Conversation>

      
    </div>
  )
}

export default Conversations*/

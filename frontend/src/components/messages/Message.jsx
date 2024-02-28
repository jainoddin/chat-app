import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'
import { extractTime } from '../../utils/extractTime'

const Message = ({ message }) => {
  const { authUser } = useAuthContext()
  const { selectedConversation } = useConversation()
  const isCurrentUser = message.senderId === authUser._id
  const chatClassName = isCurrentUser ? 'chat-end' : 'chat-start'
  const formattedTime=extractTime(message.createdAt)
  const shakeClass=message.shouldShake?"shake":""

  // Use optional chaining (?.) to handle missing data
  const profilepic = isCurrentUser ? authUser?.profilepic : selectedConversation?.profilepic

  // Use ternary operator to set background color
  const bubbleBgColor = isCurrentUser ? 'bg-blue-500' : 'bg-gray-200'

  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          {/* Add alt attribute to the img element */}
          <img src={profilepic} alt={`${isCurrentUser ? 'Your' : 'Other'} avatar`} />
        </div>
      </div>
      <div className={`chat-bubble ${bubbleBgColor} ${shakeClass} text-gray-800`}>
        <span className={`font-semibold ${isCurrentUser ? 'text-white' : ''}`}>{isCurrentUser ? 'You' : message.senderName}:</span> {message.message}
      </div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-white'>
        {formattedTime}
      </div>
    </div>
  )
}

export default Message

import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { ChatContext } from '../contexts/ChatContext'

export const Message = (props) => {
  const {currentUser}=useContext(AuthContext)
  const {data}=useContext(ChatContext)
  let message=props.message
  const ref=useRef()
  useEffect(()=>{
ref.current?.scrollIntoView({behaviour:"smooth"});
  },[message])
  return (
    <div ref={ref} className={`message ${message.senderId===currentUser.uid&&"owner"}`}>
      <div className="messageInfo">
        <img 
        src={message.senderId===currentUser.uid?currentUser.photoURL:data.user.photoURL}
        alt="" />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img&&<img src={message.img} alt="" />}
      </div>
    </div>
  )
}

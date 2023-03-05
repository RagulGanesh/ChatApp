import React, { useContext } from 'react'
import { signOut } from 'firebase/auth'
import {auth} from "../firebase"
import { AuthContext } from '../contexts/AuthContext'
export const Navbar = () => {
  const {currentUser}=useContext(AuthContext)
  return (
    <div className="navbar">
        <span className="logo">Chat App</span>
        <div className="user">
          <img src={currentUser.photoURL} alt="hello" />
          <span>{currentUser.displayName}</span>
          <button onClick={()=>{signOut(auth)}}>logout</button>
        </div>
    </div>
  )
}

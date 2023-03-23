import React from 'react'
import { Link } from 'react-router-dom'
import { auth,provider } from '../config/firebase'
import {useAuthState} from "react-firebase-hooks/auth"
import {signOut} from 'firebase/auth'

const Navbar = () => {
  // const [user,loading,error] = useAuthState(auth)
  const [user] = useAuthState(auth)

  const signUserOut=async()=>{
    await signOut(auth)
  }

  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>

          <div className='user'>
            {
              user && 
              <div>
                <p>{user?.displayName}</p>
                <img src={user?.photoURL || ""} width="100px" height="100px" />
                <button onClick={signUserOut}>Log Out</button>
              </div>
            }
        </div>
    </div>
  )
}

export default Navbar
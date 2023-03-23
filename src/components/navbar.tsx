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
    <div className='navbar'>
      <div className="links">

        <Link to="/">Home</Link>
        { !user ? 
          <Link to="/login">Login</Link>:
          <Link to="/createpost">Create Post</Link>
        }
      </div>

          <div className='user'>
            {
              user && 
              <>
                <p>{user?.displayName}</p>
                <img src={user?.photoURL || ""} width="20px" height="20px" />
                <button onClick={signUserOut}>Log Out</button>
              </>
            }
        </div>
    </div>
  )
}

export default Navbar
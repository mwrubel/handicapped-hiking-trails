import React, {useContext} from 'react'
import { NavLink } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import { HikerContext } from '../context/Hiker';

const Navbar = () => {
    const { hiker, logout, loggedIn } = useContext(HikerContext)
    const navigate = useNavigate()

    const logoutUser = () => {
        fetch('/logout', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' }
        })
        .then(() => {
            logout()
            navigate('/')
        })
    }

    if (loggedIn) {
        return(
            <div>
                <h1>Hello, {hiker.username}</h1>
                <br/>
                <h3>Instruction page</h3>
                <button onClick={logoutUser}>Logout</button>
                <NavLink to='/trails'>
                  <button>My trails</button>
                </NavLink>
            </div>
        )
    }
    else {  
      return (
      <div>
        <ul>
        <NavLink to="/login">
          <button>Login</button>
        </NavLink>
        <br/>
        <NavLink to="/signup">
          <button>Sign up</button>
        </NavLink>
        </ul>
      </div>
      )
    }
}
export default Navbar;
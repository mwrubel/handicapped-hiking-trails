import React, {useContext} from 'react'
import { useNavigate, BrowserRouter as NavLink } from "react-router-dom";
import { HikerContext } from '../context/Hiker';

const Navbar = () => {
    const { hiker, logout, loggedIn } = useContext(HikerContext)
    //const navigate = useNavigate()

    const logoutUser = () => {
        fetch('/logout', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' }
        })
        .then(() => {
            logout()
            //navigate('/')
        })
    }

    if (loggedIn) {
        return(
            <div>
                <h1>Hello, {hiker.username}</h1>
                <br/>
                <h3>Instruction page</h3>
                <button onClick={logoutUser}>Logout</button>
                <NavLink to='/trails'>signup
                  <button>My trails</button>
                </NavLink>
            </div>
        )
    }
    else {  
      return (
      <div>
        <NavLink to="/login">login
          <button>Login</button>
        </NavLink>
        <br/>
        <NavLink to="/signup">signup
          <button>Sign up</button>
        </NavLink>
      </div>
      )
    }
}
export default Navbar;
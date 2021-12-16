import React, { useState, useContext} from 'react'
import { HikerContext } from '../context/Hiker'

const Signup = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [errorsList, setErrorsList] = useState([])
    const {signup} = useContext(HikerContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
                password_confirmation: passwordConfirmation,
                zipcode: zipcode
            })
        })
        .then(res => res.json())
        .then(user => {
            //if there's no errors, signup the user
            if (!user.errors) {
                signup(user)
                //navigate('/')
            } else {
                setUsername("")
                setPassword("")
                setPasswordConfirmation("")
                const errorLis = user.errors.map(e => <li>{e}</li>)
                setErrorsList(errorLis)
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /> <br/>
                <label>Password: </label>
                <input
                    type="password"
                    id="password"    
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> <br/>
                <label>Confirm Password: </label>
                <input
                    type="password"
                    id="passwordConfirmation"    
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                /> <br/>
                <label>Zipcode: </label>
                <input
                    type="text"
                    id="zipcode"    
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                /> <br/>
                <input type="submit"/>
            </form>
            <ul>
                {errorsList}
            </ul>
        </div>
    )
}

export default Signup
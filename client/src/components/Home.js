import React, { useContext } from 'react'
import { HikerContext } from '../context/Hiker';

const Home = () => {
    const { hiker, loggedIn } = useContext(HikerContext)

    if (loggedIn) {
        return (
            <div>
                <h1>{hiker.username}'s homepage</h1>
            </div>
        
        )
    } else 
    return (<h1><u>Login or signup</u></h1>) 
}
export default Home;
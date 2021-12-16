import React, { useState, useContext } from 'react'
import { HikerContext } from '../context/Hiker'

const TrailForm = ({addTrailFlag}) => {
    const {addTrail} = useContext(HikerContext)
    const [trailName, setTrailName] = useState("")
    const [city, setCity] = useState("")
    const [address, setAddress] = useState("")
    const [zip, setZip] = useState(0)
    const [difficulty, setDifficulty] = useState(0)
    const [picture, setPicture] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addTrail({
            trail_name: trailName,
            city: city,
            address: address,
            zip: zip,
            difficulty: difficulty,
            picture: picture
        })
        addTrailFlag()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Trail name: </label>
            <input
                type="text"
                id="trailName"
                value={trailName}
                 onChange={(e) => setTrailName(e.target.value)}
             /> <br/>
            <label>City: </label>
            <input
                type="text"
                id="city"    
                value={city}
                onChange={(e) => setCity(e.target.value)}
            /> <br/>
            <label>Address: </label>
            <input
                type="text"
                id="address"    
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            /> <br/>
            <label>Zipcode: </label>
            <input
                type="number"
                id="zip"    
                value={zip}
                onChange={(e) => setZip(e.target.value)}
            /> <br/>
            <label>Difficulty: </label>
            <input
                type="number"
                id="difficulty"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
            /> <br/>
            <label>Picture url: </label>
            <input
                type="text"
                id="picture"    
                value={picture}
                onChange={(e) => setPicture(e.target.value)}
            /> <br/>
            <input type="submit"/>
        </form>
    )
}
export default TrailForm
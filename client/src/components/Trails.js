import React, { useState, useContext } from 'react'
import { HikerContext } from "../context/Hiker"
import { Route, useParams } from 'react-router-dom'
import TrailForm from './TrailForm'
//import { HikerContext } from '../context/Hiker'

const Trails = () => {
    const { trails, loggedIn } = useContext(HikerContext)
    const params = useParams()
    const [formFlag, setFormFlag] = useState(false)

    const addTrailFlag = () => {
        setFormFlag(false)
    }

    // edit function
    const editTrail = (e) => {
        fetch('/trails')
    }

    // delete function
    const deleteTrail = (e) => {
        //delete get info from session
        fetch('/trails/' + e.target.id, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
        .then(() => {
            //set trails array
        })

    }

    //if someone is logged in, display all their trails
    if (loggedIn){
        const trailsList = trails.map(t => <li key={t.id}>{t.trail_name}, {t.picture}, {t.difficulty} <button onClick={editTrail} id={t.id}>Edit trail</button> <button onClick={deleteTrail} id={t.id}>Delete trail</button></li>)
        return(
            <div>
                <h3>Trails: </h3>
                <br/>
                {trailsList}
                <br/>
                {formFlag ? 
                    <TrailForm addTrailFlag={addTrailFlag}/>
                    :
                    <button onClick={() => setFormFlag(true)}>Add a trail</button>
                }
                
            </div>
        )
    } else {
        return (
            <h3>Not authorized. Login or signup</h3>
        )
    }
}

export default Trails
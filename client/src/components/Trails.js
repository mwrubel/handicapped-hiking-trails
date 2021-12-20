import React, { useState, useContext } from 'react'
import { HikerContext } from "../context/Hiker"
import { Route, useParams } from 'react-router-dom'
import TrailForm from './TrailForm'
import EditTrailForm from './EditTrailForm'
//import { HikerContext } from '../context/Hiker'

const Trails = () => {
    const { trails, loggedIn, deleteTrail, editId } = useContext(HikerContext)
    const params = useParams()
    const [formFlag, setFormFlag] = useState(false)
    const [editFormFlag, setEditFormFlag] = useState(false)
    const [theId, setTheId] = useState(0)

    const addTrailFlag = () => {
        setFormFlag(false)
    }

    const editTrailFlag = () => {
        setEditFormFlag(false)
    }

    //if someone is logged in, display all their trails
    if (loggedIn){
        const trailsList = trails.map(t => <ul key={t.id}><br/>{t.trail_name}, difficulty: {t.difficulty} <br/><img src={t.picture}></img> <br/><button onClick={() => setEditFormFlag(true)} id={t.id}>Edit trail</button> <button onClick={deleteTrail} id={t.id}>Delete trail</button></ul>)
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

                {editFormFlag ?
                    <EditTrailForm editTrailFlag={editTrailFlag}/>
                    :
                    <h1></h1>
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
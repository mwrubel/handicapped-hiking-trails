import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

// create context
const HikerContext = React.createContext()

// provider (provides children with value)
function HikerProvider({ children }) {
    const [editId, setEditId] = useState(0)
    const [hiker, setHiker] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)
    const [trails, setTrails] = useState([])
    const [newTrail, setNewTrail] = useState("")
    // const navigate = useNavigate()

    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then(data => {
            setHiker(data)
            if (data.error) {
                setLoggedIn(false)
            } else {
                setLoggedIn(true)
                fetchTrails()
            }
        })
    }, [])

    const fetchTrails = () => {
        fetch('/trails')
        .then(res => res.json())
        .then(data => {
            setTrails(data)
        })
    }

    //add trail function
    const addTrail = (trail) => {
        console.log(trail)
        fetch('/trails', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(trail)
        })
        .then(res => res.json())
        .then(data => {
            setTrails([...trails, data])
        })
    }

    //edit trail function
    const editTrail = (id, trail) => {
        console.log("PATCH ID" + id)
        fetch('/trails/' + id, {
            method: "PATCH",
            headers: { "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*", },
            body: JSON.stringify({
            trail_name: trail.trail_name, 
            city: trail.city,
            address: trail.address, 
            zip: trail.zip, 
            difficulty: trail.difficulty,
            picture: trail.picture})
        })
        .then(res => res.json())
        .then(data => {
            setTrails([...trails, data])
        })
        fetchTrails()
    }

    // delete function
    const deleteTrail = (e) => {
        fetch('/trails/' + e.target.id, {
            method: "DELETE"
        })
        fetchTrails()
        // console.log(trails)
        //  let updatedTrails = trails
        //  updatedTrails.filter((item) => item.trail_name !== e.target.value)
        //  console.log("e: "+e.target.id)
        //  setTrails([...updatedTrails])
        //  console.log(updatedTrails)
    }

    const login = (hiker) => {
        setHiker(hiker)
        fetchTrails()
        setLoggedIn(true)
    }

    const logout = () => {
        setHiker({})
        setTrails([])
        setLoggedIn(false)
    }

    const signup = (hiker) => {
        setHiker(hiker)
        fetchTrails()
        setLoggedIn(true)
    }

    return (
        <HikerContext.Provider value={{hiker, login, logout, signup, addTrail, editTrail, deleteTrail, loggedIn, trails, editId}}>
            {children}
        </HikerContext.Provider>
    )
}

export { HikerContext, HikerProvider}
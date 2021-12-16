import React, { useState, useEffect} from 'react'

// create context
const HikerContext = React.createContext()

// provider (provides children with value)
function HikerProvider({ children }) {
    const [hiker, setHiker] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)
    const [trails, setTrails] = useState([])

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
            console.log(`trails: ${data.trail_name}`)
            //debugger
            setTrails(data)
        })
    }

    const addTrail = (trail) => {
        fetch('/trails', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(trail)
        })
        .then(res => res.json())
        .then(data => {
            setTrails([...trails, data])
        })
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
        <HikerContext.Provider value={{hiker, login, logout, signup, addTrail, loggedIn, trails}}>
            {children}
        </HikerContext.Provider>
    )
}

export { HikerContext, HikerProvider}
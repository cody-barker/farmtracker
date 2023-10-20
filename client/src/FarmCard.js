import React from 'react'
import { NavLink } from 'react-router-dom'

function FarmCard({farm}) {

    const {
        id,
        name,
        city,
        state
    } = farm

    return(
        <div id="farm-card">
            <NavLink to={`/farms/${id}`}>
                <h3>{name}</h3>
                <p>{city}, {state}</p>
            </NavLink>
        </div>
    )
}

export default FarmCard
import React from 'react'

function Child({childData}) {
    const handleChange = (e) => {
        childData(e.target.value)
    }
    return (
        <div>
            <h1>Child</h1>
            <input onChange={handleChange} />
        </div>
    )
}

export default Child
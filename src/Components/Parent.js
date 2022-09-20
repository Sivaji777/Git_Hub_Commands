import React, { useState } from 'react'
import Child from './Child'

function Parent() {
    const [data, setData] = useState('')
    const childData = (value) => {
        setData(value)
    }

    console.log(data,'data');

    return (
        <div>
            <h1   style={{ marginLeft: '300px' }} >Parent</h1>
            <div style={{ width: '500px', height: "500px", border: '1px solid black', marginLeft: '300px',backgroundColor:`${data}` }}  >
            </div>
            <div style={{ marginLeft: '300px' }} >
                <Child childData={childData} />
            </div>

        </div>
    )
}

export default Parent
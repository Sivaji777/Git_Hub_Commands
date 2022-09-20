import React from 'react'
import '../Styles/Home.css'
function Home() {
    return (
        <div className='toplevel' >
            <h1>Css Media Queries</h1>
            <div>
                <div className='parent' >
                    <div className='one' >
                        <div className='one1' style={{ backgroundColor: "red", width: "100px", height: '100px' }} >

                        </div>
                        <div className='one1' style={{ backgroundColor: "red", width: "100px", height: '100px' }}>

                        </div>
                        <div className='one1' style={{ backgroundColor: "red", width: "100px", height: '100px' }}>

                        </div>
                    </div>
                    <div className='two' >
                        <div className='two1' style={{ backgroundColor: "red", width: "100px", height: '100px' }} >
                        </div>
                        <div className='two1' style={{ backgroundColor: "red", width: "100px", height: '100px' }} >

                        </div>
                        <div className='two1' style={{ backgroundColor: "red", width: "100px", height: '100px' }} >

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
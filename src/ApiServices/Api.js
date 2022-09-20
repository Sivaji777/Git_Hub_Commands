import React, { useEffect, useState } from 'react'

function Api() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET'
        }).
            then(res => res.json())
            .then((res) => {
                setData(res)
            }).catch((err) => {
                console.log(err);
            })
    }, [])


    const handleDelte = (data) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${data.userId}`, {
            method: 'delete'
        }).then((res) => {
            console.log(res, '22');
        }).catch((err) => {
            console.log(err);
        })
    }
    const handlePostdata = () => {
        const payload = {
            method: 'post',
            body: JSON.stringify({
                title: 'sivaji',
                body: 'Software Developer',
                userId: '1'
            })
        }
        fetch(`https://jsonplaceholder.typicode.com/posts`, payload)
            .
            then(res => res.json())
            .then((res) => {
                // setData(res)
                console.log(res, '222');

            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <h5>Api Integration</h5>
            {
                data && data.map((ele, ind) => {
                    return (
                        <div>
                            <h1>{ele.title}</h1>
                            <button onClick={() => handleDelte(ele)} >Delete</button>
                            <button onClick={handlePostdata} >post</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Api
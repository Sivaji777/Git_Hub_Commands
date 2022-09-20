import axios from 'axios';
import React, { useEffect, useState } from 'react'

function TokenApi() {
    const [data, setData] = useState([])
    const token = 'fpyzw76umprjq7cpogb22tnglr7e644neoxp1727'
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/users'
        // fetch(url)
        //     .then((response) => response.json())
        //     .then((res) => {
        //         console.log(res, '11111111');
        //     })
        //     .catch((error) => {
        //     });

        const payload = {
            url: 'https://api.json-generator.com/templates/Ekx4iiPPM8Ee/data',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        axios.get(payload).then((res) => {
            setData(res.data.patients)
        }).catch((err) => {
            console.log(err, '111');
        })

    }, [])
    return (
        <div>
            <table>
                <thead>
                    <th>SL.No</th>
                    <th>0</th>
                    <th>1</th>
                    <th>2</th>
                </thead>
                <tbody>
                    {
                        data && data?.map((ele, ind) => {
                            return (
                                <tr>
                                    <td>{ind + 1}</td>
                                    <td>{ele?.diseases[0]?.medicines[0]}</td>
                                    <td>{ele?.diseases[0]?.medicines[1]}</td>
                                    <td>{ele?.diseases[0]?.medicines[2]}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TokenApi
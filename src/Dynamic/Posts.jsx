import axios from 'axios';
import React, {useState, useEffect, useActionState} from 'react';
import {Link} from 'react-router-dom';

function Posts() {
    const[data, setData] = useState([])
    useEffect(()=> {
        axios.get('https://6856fb5721f5d3463e543028.mockapi.io/users/flights')
        .then(response=> setData(response.data))
    }, [data])

    return(
        <div>
            {
                data.map((f)=> {
                    return(
                        <div style={{
                            border: '1px solid black'
                        }}>
                            <p>{f.from}</p>
                            <p>{f.to}</p>
                            <p>{f.time}</p>
                            <p>{f.price}</p>
                            <p>{f.number_of_seats}</p>
                            <p>{f.airline}</p>
                            <Link to={`/posts/${f.id}`}>read more</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Posts
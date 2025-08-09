import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

function Post_details() {
    const[data, setData] = useState({})
    const {id} = useParams()
    useEffect(()=> {
        axios.get(`https://6856fb5721f5d3463e543028.mockapi.io/users/flights/${id}`)
        .then((response)=> setData(response.data))
    }, [data])

    return(
        <div>
            <p>{data.from}</p>
            <p>{data.to}</p>
            <p>{data.time}</p>
            <p>{data.price}</p>
            <p>{data.number_of_seats}</p>
            <p>{data.airline}</p>
        </div>
    )
}

export default Post_details
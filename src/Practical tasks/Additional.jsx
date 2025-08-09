import React, {useEffect, useState} from 'react';

const fruits = ['Apple', 'Banana', ' Cherry'];
    const letters = ['a', 'b', 'c'];
    const numbers = [9,6,2,1,7];
    const users = [
        {id: 1, name: "Merey", age:21},
        {id: 2, name: "Meruyert", age:22},
        {id: 3, name: "Zhanel", age:20}
    ]

function Additional()
{
    return (
        <div>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>

            <ul>
                {letters.map((letter, i) => (
                    <li key={i}>{letter.toUpperCase()}</li>
                ))}
            </ul>

            <ul>
                {numbers.sort((a, b)=> a-b).map((number, index)=>(
                    <li key={index}>{number}</li>
                ))}
            </ul>

            <ul>
                {numbers.map((number, index)=>(
                    <li key={index}>{number*number}</li>
                ))}
            </ul>

            <ul>
                {users.map(user=> (
                    <li key={user.id}>{user.name} {user.age}</li>
                ))}
            </ul>
        </div>
    )
}

export default Additional
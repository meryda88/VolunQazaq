import React, {useState} from 'react';
function Ternary() {
    const isOnline = true;
    const temperature = 30
    const [isDark, setDark] = useState(false)
    const [isShow, setShow] = useState(false)
    return (
        <div>
            <p>{isOnline ? "Қолданушы онлайн" : "Қолданушы офлайн"}</p>
            {temperature > 40 ? 'Hot' : temperature > 20 ? 'Warm' : 'Cold'}

            <button style={{
                backgroundColor: isDark ? 'black' : 'white',
                color: isDark ? 'white' : 'black'
        }}
             onClick={() => setDark(!isDark)} > {isDark ? 'dark mode' : 'light mode'}</button>

             <button 
                onClick = {() => setShow(!isShow)} > {isShow ? 'Show' : 'Hide'}
             </button>
             <p style={{
                display: isShow ? 'none' : 'block '
             }}>Heeyy!</p>
        </div>
    )
}

export default Ternary
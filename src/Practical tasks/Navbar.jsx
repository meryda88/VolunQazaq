import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return(
        <div>
            <Link to="/admin">admin</Link> <br/>
            <Link to="/flightlist">flightlist</Link> <br/>
        </div>
    );
}

export default Navbar
import React from 'react';
import {Navigate} from 'react-router-dom';

function ProtectedRoute({isAuth,children}){
    return isAuth? children:<Navigate to='/login'></Navigate>
}

export default ProtectedRoute;
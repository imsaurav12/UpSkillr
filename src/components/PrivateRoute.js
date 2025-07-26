import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({isLoggedIn,children}) => {
    // const navigate = useNavigate();
    if(isLoggedIn){
        return children; // PrivateRoute ka children Dashboard h
    }
    else{
        return <Navigate to='/login'/>

        // navigate("/login");
    }
  return (
    <div>
      
    </div>
  )
}

export default PrivateRoute

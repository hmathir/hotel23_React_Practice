import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

const PrivateRoute = ({children}) => {
    const {loading, user} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="text-white font-bold text-6xl text center">Loading....</div>
    }
    if(user){
        return children;
    }
    
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;
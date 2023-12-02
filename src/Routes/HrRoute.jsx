import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from 'prop-types';
import useHR from "../hooks/useHR";


const HrRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isHr, isHrLoading] = useHR();
    const location = useLocation();

    if (loading || isHrLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isHr) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

HrRoute.propTypes = {
    children : PropTypes.node
}

export default HrRoute;
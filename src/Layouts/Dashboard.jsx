import { Outlet } from "react-router-dom";
import Nav from "../Pages/Dashboard/Nav/Nav";



const Dashboard = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>                   
        </div>
    );
};

export default Dashboard;
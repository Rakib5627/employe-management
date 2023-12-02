import { NavLink } from "react-router-dom";
import { FaBook, FaHome, FaList, FaReceipt, FaUsers } from "react-icons/fa";
import useAdmin from "../../../hooks/useAdmin";
import useHR from "../../../hooks/useHR";


const Nav = () => {

    const [isAdmin] = useAdmin();
    const [isHR] = useHR();

    return (
        <div className="bg-purple-400">
            <ul className="menu p-4 grid grid-cols-3">

                {/* hr-- */}
                <li>
                    <NavLink to="/">
                        <FaHome></FaHome>
                        Home</NavLink>
                </li>



                {/* admin */}
                {
                    isAdmin ? <>
                        <li>
                            <NavLink to="/dashboard/users">
                                <FaUsers></FaUsers>
                                All Users</NavLink>
                        </li>

                    </>
                        :
                        isHR ? <>
                            <li>
                                <NavLink to="/dashboard/employeelist">
                                    <FaReceipt />
                                    Employee List</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/progress">
                                    <FaReceipt />
                                    Progress</NavLink>
                            </li>
                        </> :

                            <>
                               
                                <li>
                                    <NavLink to="/dashboard/worksheet">
                                        <FaBook></FaBook>
                                        Work Sheet</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymenthistory">
                                        <FaList></FaList>
                                        Payment History</NavLink>
                                </li>

                            </>
                }


            </ul>
        </div>
    );
};

export default Nav;
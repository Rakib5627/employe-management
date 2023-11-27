import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);


    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }


    const navLinks = <>
        <li className=""><NavLink to="/">Home</NavLink></li>
        <li className=""><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li className=""><NavLink to="/contactUs">Contact Us</NavLink></li>
    </>




    return (
        <div className="navbar fixed z-10 bg-opacity-20 max-w-screen-xl bg-black text-white rounded-b-lg">

            <div className="navbar-start">
                <Link className="normal-case text-lg md:text-3xl font-semibold">Employee Management</Link>
            </div>

            <div className="navbar-center">
                <div className="dropdown">
                    <label tabIndex={0} className="btn lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>

            </div>

            <div className="navbar-end">
                {
                    user ? <>
                        <div>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className=" w-6 md:w-10 rounded-full">
                                    
                                            <img src={user.photoURL} alt="Image 1" />
                                        
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>{user.displayName}</li>
                                    <li>{user.email}</li>
                                    <li onClick={handleSignOut}>Logout</li>
                                </ul>
                            </div>
                        </div>
                    </>
                        :
                    <><p className="p-2 text-xs md:text-base text-blue-600 font-semibold hover:font-bold"><NavLink to="/login">Login</NavLink></p>
                        <Link className="hidden md:block p-2 text-blue-600 font-semibold hover:font-bold" to="/signup">Register</Link></>
                }
            </div>
        </div>
    );
};

export default NavBar;
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Dashboard from "../Layouts/Dashboard";
import Admin from "../Pages/Dashboard/Admin/Admin";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/contactUs",
          element: <ContactUs></ContactUs>,
        },
       
      ],
    },
    {
      path: "dashboard",
      element: <Dashboard></Dashboard> ,
      children: [
        {
          path: "admin",
          element: <Admin></Admin> ,
        },
        
      ],
    }
  ]);
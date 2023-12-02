import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Dashboard from "../Layouts/Dashboard";
import Admin from "../Pages/Dashboard/Admin/Admin";
import AllUsers from "../Pages/Dashboard/AllUser/AllUsers";
import PrivateRoute from "./PrivateRoute";
import WorkSheet from "../Pages/Dashboard/Employee/WorkSheet";
import EmployeeList from "../Pages/Dashboard/HR/EmployeeList";
import Progress from "../Pages/Dashboard/HR/Progress";
import DetailsSlug from "../Pages/Dashboard/HR/DetailsSlug";
import WorksheetTable from "../Pages/Dashboard/Employee/WorksheetTable";
import Top from "../Pages/Dashboard/Nav/Top";
import AdminRoute from "./AdminRoute";
import HrRoute from "./HrRoute";



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
          path: "/register",
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
      element: <PrivateRoute><Dashboard></Dashboard> </PrivateRoute>,
      children: [
        {
          path: "dashboard",
          element: <Top></Top> ,
        },
        {
          path: "admin",
          element: <AdminRoute><Admin></Admin></AdminRoute> ,
        },
        {
          path: "users",
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute> ,
        },
        {
          path: "worksheet",
          element: <PrivateRoute><WorkSheet></WorkSheet></PrivateRoute>,
        },
        {
          path: "employeelist",
          element: <HrRoute><EmployeeList></EmployeeList></HrRoute>,
          
        },
        {
          path: "details/:id",
          element: <HrRoute><DetailsSlug></DetailsSlug></HrRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`),
          
        },
        {
          path: "progress",
          element: <HrRoute><Progress></Progress></HrRoute>,
          
        },
        {
          path: "paymenthistory",
          element: <PrivateRoute><WorksheetTable></WorksheetTable></PrivateRoute>,
          
        },
        
      ],
    }
  ]);
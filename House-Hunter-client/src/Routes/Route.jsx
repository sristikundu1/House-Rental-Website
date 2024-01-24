import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashBoard from "../LayOut/DashBoard";
import AllHouse from "../Pages/DashBoard/AllHouse/AllHouse";
import Booked from "../Pages/DashBoard/Booked/Booked";
import MyBooking from "../Pages/DashBoard/MyBooking/MyBooking";


const Route = createBrowserRouter([
    {
        path:"/",
        element:<MainLayOut></MainLayOut>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: () => fetch('https://house-hunter-server-coral-xi.vercel.app/house')
            }
        ]
    },
    {
        path:"/dashboard",
        element:<DashBoard></DashBoard>,
        children:[
            {
                path:"allhouse",
                element:<AllHouse></AllHouse>,
                loader: () => fetch('https://house-hunter-server-coral-xi.vercel.app/house')
            },
            {
                path:"booked",
                element:<Booked></Booked>
            },
            {
                path:"mybooking",
                element:<MyBooking></MyBooking>
            }
        ]

    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/register",
        element:<Register></Register>
    }
])

export default Route;
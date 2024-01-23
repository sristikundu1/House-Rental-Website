import { NavLink, Outlet } from "react-router-dom";
import { RiHomeHeartLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { TiHome } from "react-icons/ti";
import { SiHomeassistant } from "react-icons/si";

const DashBoard = () => {
    return (
        <div className="flex">
            <div className="w-80 min-h-screen bg-[#b7e4c7] py-16 px-3">
                <h2 className="text-[rgb(21,21,21)] font-greate text-3xl text-center font-bold italic mb-10">HOUSE HUNTER</h2>
                <ul className=" menu p-4 bg-transparent text-[#151515] font-cinzel">



                    <li className=" font-medium	text-xl"><NavLink to="/dashboard/allhouse"><SiHomeassistant></SiHomeassistant>All House</NavLink></li>
                    <li className=" font-medium	text-xl"><NavLink to="/dashboard/booked"><RiHomeHeartLine></RiHomeHeartLine>Booked House</NavLink></li>



                    <li className=" font-medium	text-xl"><NavLink to="/dashboard/mybooking"><IoHomeOutline></IoHomeOutline> My Bookings</NavLink></li>




                    <div className="divider bg-white h-1"></div>


                    <li className=" font-medium	text-xl"><NavLink to="/"><TiHome></TiHome> Home</NavLink></li>


                </ul>

            </div>


            <div className="flex-1 bg-[#F6F6F6] ">
                <Outlet></Outlet>

            </div>

        </div>
    );
};

export default DashBoard;
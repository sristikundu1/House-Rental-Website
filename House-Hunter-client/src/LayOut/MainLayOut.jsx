import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";


const MainLayOut = () => {
    return (
        <div>
           <Navbar></Navbar>
            <div className="pt-24 min-h-[calc(100vh-164px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default MainLayOut;
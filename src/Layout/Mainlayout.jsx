import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


const Mainlayout = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-screen">
            <Outlet/>
            </div>
            
        </div>
    );
};

export default Mainlayout;
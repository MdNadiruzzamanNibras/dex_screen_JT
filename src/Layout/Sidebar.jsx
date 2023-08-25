import { Link } from "react-router-dom";
import baseLineToken from "../images/ic_baseline-token.png"
import pair from "../images/fluent_pair-24-filled.png"
import vector from "../images/Vector.png"
import NFT from "../images/NFTify.png"

const Sidebar = () => {
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn  drawer-button lg:hidden">ki</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <div className="menu lg:p-4 lg:w-80 min-h-full bg-indigo-950 text-white">
                    <div className="flex"><div><img src={vector} alt="" /></div><div className="ml-3">
                    <img src={NFT} alt="" /></div></div>
      <Link to={"/"}><div className="flex items-center"><div><img  src={baseLineToken} alt="" /></div><div><h1 className="text-2xl font-bold ">Token Address</h1 ></div></div></Link>
      <Link to={"/pair"}><div className="flex items-center"><div><img  src={pair} alt="" /></div><div><h1 className="text-2xl font-bold ">Pair Address</h1></div></div></Link>
      
      
    </div>
  
  </div>
</div>
    );
};

export default Sidebar;
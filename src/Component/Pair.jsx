import { useState } from "react";
import background from '../images/token_bg.png'
import vector from '../images/Vector.png'
import outline from '../images/ic_outline-info.png'
import dollar from '../images/pepicons-pop_dollar.png'
import axios from "axios";

const Pair = () => {
     const [data, setData]= useState({})
  const [pair, setpair] = useState('')
 
    
  const handlesearch= async(event)=>
     {if(event.key === 'Enter')
    
   { const res = await axios.get(`https://api.dexscreener.com/latest/dex/search/?q=${pair}`)
    setData(res.data)
    setpair('')
  }
     

  }
   console.log(data);
    return (
        <div style={{backgroundImage: `url(${background})`, height: "100vh", width: "85vw" }}>
      <input
        style={{borderRadius: "50px", marginRight: "60vw"}}
        className="w-96 input input-bordered input-dark mt-20 h-12 text-center text-lg"
        type="text"
        id=""
        placeholder='search'
        value={pair}
        onChange={event => setpair(event.target.value)}
        onKeyPress={handlesearch}
      />
      <div className="mt-9">
        <h1 className="text-4xl font-bold ml-4 text-white">Pair Search Results</h1>
        {data?.pairs?.map((dex) => (
          <div key={dex?.dexId} className="mt-5 lg:grid lg:grid-cols-4 ml-3 text-white">
            <div className="card w-80 bg-indigo-900 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Basic Info</h2>
                  <p>Pair created at: {dex.baseToken.name ? dex.baseToken.name : "No data" }</p>
                  <p>Symbol: {dex.baseToken.symbol ? dex.baseToken.symbol : "No data" }</p>
                  <p>Dex ID: {dex.dexId ? dex.dexId : "No data" }</p>
                  <p>Pair Address: #{dex.pairAddress ? dex.pairAddress.substring(0, 6) : "No data" }</p>
    <div className="card-actions justify-end">
      <div className="bg-red-800 rounded-full p-3">
                      <img src={outline} alt="" />
     </div>
    </div>
  </div>
</div>
            <div className="card w-80 bg-indigo-900 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Base Token</h2>
    <p>Name: {dex.baseToken.name ? dex.baseToken.name : "No data" }</p>
                  <p>Symbol: {dex.baseToken.symbol ? dex.baseToken.symbol : "No data" }</p>
                  <p>Address: #{dex.quoteToken.address ? dex.quoteToken.address.substring(0, 6) : "No data" }</p>
                  
     <div className="card-actions justify-end">
      <div className="bg-red-800 rounded-full p-3">
                      <img src={vector} alt="" />
     </div>
    </div>
  </div>
</div>
            <div className="card w-80 bg-indigo-900 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Quote Token</h2>
   <p>Name: {dex.baseToken.name ? dex.baseToken.name : "No data" }</p>
                  <p>Symbol: {dex.baseToken.symbol ? dex.baseToken.symbol : "No data" }</p>
                  <p>Address: #{dex.quoteToken.address ? dex.quoteToken.address.substring(0, 6) : "No data" }</p>
    <div className="card-actions justify-end">
      <div className="bg-red-800 rounded-full p-3">
                      <img src={vector} alt="" />
     </div>
    </div>
  </div>
</div>
            <div className="card w-80 bg-indigo-900 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Price</h2>
                  <p>Price Native:{dex.priceNative ? dex.priceNative : "No data" }</p>
                  <p>Price:{dex.priceUsd ? dex.priceUsd : "No data" }</p>
    <div className="card-actions justify-end">
      <div className="bg-red-800 rounded-full p-3">
                      <img src={dollar} alt="" />
     </div>
    </div>
  </div>
</div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Pair;
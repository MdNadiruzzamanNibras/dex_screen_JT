import { useState } from "react";

const Token = () => {
    const [data, setData]= useState({})
  const [token, setToken] = useState('')
  const url =`https://api.dexscreener.com/latest/dex/tokens/${token}`
    
  const handlesearch=(event)=>
     {if(event.key === 'Enter')
    
   { fetch(url)
    .then(res=> res.json())
    .then(data=> setData(data))
    setToken('')
  }
      console.log(data);

  }
    return (
        <div>
           
                <input style={{borderRadius:"50px", marginRight:"65vw"}} className="w-96 input input-bordered mt-20 h-12  text-center text-lg" type="text"  id="" placeholder='serach'
      value={token} 
      onChange={event => setToken(event.target.value)}
      onKeyPress={handlesearch} 
                />
                
           
        </div>
    );
};

export default Token;
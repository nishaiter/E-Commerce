import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
// import Search from "./Search";

export default function APIFetch(){

    var API='https://fakestoreapi.com/products/';
    const[api,setapi]=useState([]);
    const[a,seta]=useState("");
    
    useEffect(()=>{
        axios.get(API).then(res=>{
            console.log(res.data);
            setapi(res.data);
        })
    },[])

    
    function getFilteredList() {
        if (!a) {
          return api;
        }
        return api.filter((item) => item.category === a);
      }
      var filteredList = useMemo(getFilteredList, [a, api]);

    const myfunc=(ev)=>{
        console.log(ev);
        seta(ev);
        
    }
    return(
        <div className="container">
            <h1 className="mt-5  text-center">Latest Products</h1><hr/>
            
            <div className="text-center search mt-5">
                <p>Search your Product: </p>
                <select value={a} onChange={(ev)=>myfunc(ev.target.value)} >
                
                    <option value="" onChange={()=>setapi(api)} >All</option>
                    
                    <option value="jewelery">Jewelery</option>
                    <option value="men's clothing">Men's clothing</option>
                    <option value="electronics">Electronics</option>
                    <option value="women's clothing">Women's clothing</option>
                </select>
            </div>
            
            
            <h1 className=" mt-5">Products</h1>
            <div className="row">

            {
                filteredList && filteredList.map(obj=>
                    <div className="col-xxl-3 mt-5" >
                        <div class="card h-100 text-center p-4">
                            <img class="card-img-top" src={obj.image} alt={obj.title} height="250px"/>
                            <div class="card-body">
                                <h5 class="card-title mb-0">{obj.title.substring(0,12)}...</h5>
                                <p class="card-text lead fw-bold">
                                   ${obj.price}
                                </p>
                                <Link to={'/singleproduct/'+obj.id} class="btn btn-outline-dark">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                )
            }
            </div>
           
        </div>
    )
}

//   {
//     filteredList && filteredList.map(obj=>
//         <div className="col-xxl-3 mt-5" >
//             <img src={obj.image} className="img-fluid"/>
//             <h2>{obj.price}</h2>
//             <p>{obj.title}</p>
//             <p>
//                 <Link to={'/singleproduct/'+obj.id}>Details</Link>
//             </p>
//         </div>
// )
// }
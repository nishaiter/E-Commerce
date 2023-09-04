import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleP(){
var record= useParams();
console.log(record);

const[api,setapi]=useState([]);

useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${record.pid}`).then(res=>{
        console.log(res.data);
        setapi(res.data);
    })
},[])

    return(
        <div> 
            <div className="container">
                <div className="row mt-5">
                    <div className="col-xxl-6">
                        <img src={api.image} className="img-fluid"/>
                    </div>
                    <div className="col-xxl-6">
                        <h1>{api.title}</h1>
                        <h2>{api.price}</h2>
                        <p>
                            {api.description}
                        </p>
                        <p>
                            <button type="button" className="btn btn-danger">Add to Cart</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


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
                    <div className="col-xxl-6 mt-5">
                        <img src={api.image} className="img-fluid" height="300px" width="300px"/>
                    </div>
                    <div className="col-xxl-6 single-u">
                        <h4 className="text-black-50">{api.category}</h4>
                        <h1>{api.title}</h1>
                        <p className="lead fw-bolder">
                            Rating {api.rating && api.rating.rate}
                            <i className="fa fa-star"></i>
                        </p>
                        <h3>$ {api.price}</h3>
                        <p className="lead">{api.description}</p>
                        <p>
                            <button  className="btn btn-outline-dark px-3 py-2">Add to Cart</button>
                            <Link to="/cart" className="btn btn-dark px-3 py-2 ms-2 ">Go to Cart</Link>

                        </p>
                    </div>
                </div>
               
            </div>
        </div>
    )
}
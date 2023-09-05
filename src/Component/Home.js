import React from "react";
import APIFetch from "./APIFetch";

const Home=()=>{
    return(
        <div className="card1">
            <div class="card bg-dark text-white border-0">
                <img class="card-img" src="\assests\bg.jpg" alt="Background" height="600px"/>
                <div class="card-img-overlay d-flex align-items-center" >
                    <div className="container card1-s">
                        <h1 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h1>
                        <p class="card-text fs-2 lead">
                            CHECK OUT ALL THE TRENDS
                        </p>
                    </div>
                    
                    
                </div>
            </div>
            <APIFetch/>
        </div>
    )
}
export default Home;
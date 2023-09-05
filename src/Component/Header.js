import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header(){
   
    return(
        <nav class="navbar navbar-expand-lg  head-nav p-3">
        <div class="container">
            <Link class="navbar-brand fs-4 fw-bold" to="/">E-Commerce</Link>
            <div  className="home-search">
            <ul class="navbar-nav  ">
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/products">Products</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/about">About</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/contact">Contact</Link>
                </li>
                
            </ul>
            <div className="buttons">
                <Link to="/login" className="btn btn-outline-dark ">
                <i class="fa fa-sign-in "></i>  Login</Link>
                <Link to="/register" className="btn btn-outline-dark ms-2">
                <i class="fa fa-user-plus"></i>  Register</Link>
                <Link to="/cart" className="btn btn-outline-dark ms-2">
                <i class="fa fa-shopping-cart"></i>  Cart (0)</Link>
            </div>
            </div>
        </div>
</nav>
    )
}
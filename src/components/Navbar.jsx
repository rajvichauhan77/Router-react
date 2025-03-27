import React from "react";
    import {Link} from "react-router-dom"

const Navbar = () => {

 return(
    <nav className=" ">

    <div className="container shadow flex justify-between text-lg p-3 font-medium mx-auto drop-shadow-lg rounded-lg">
      
        <h1>Routing</h1>

        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="products">Products</Link>

    </div>
</nav>

 )
}

export default Navbar
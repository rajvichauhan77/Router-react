import React from "react";
    import {Link} from "react-router-dom"
    import { useNavigate } from "react-router-dom";

const Navbar = () => {

      const navigate = useNavigate()

 return(
    <nav className="">

    <div className="container shadow flex justify-between text-lg p-3 font-medium mx-auto drop-shadow-lg rounded-lg">
      
        <h1>Routing</h1>
        <div  className={JSON.parse(sessionStorage.getItem("login")) ? `flex gap-3` : `invisible`} >

        </div>

        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="products">Products</Link>
        <button onClick={() => {sessionStorage.removeItem("login"); navigate('/')}}>Logout</button>
    </div>
</nav>

 )
}

export default Navbar
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const [name,setName] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()



    function handleLogin(){
        
        if(name=="admin" && password=="999")
            {
            console.log("login")
            sessionStorage.setItem("login", JSON.stringify(true))
            navigate("home")
        }
    }
        return(
            <div class="h-96 m-auto mt-8 flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            <div class="relative">
              <div class="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg animate-pulse"></div>
              <div id="form-container" class="bg-white p-16 rounded-lg shadow-2xl w-80 relative z-10 transform transition duration-500 ease-in-out">
                <h2 id="form-title" class="text-center text-3xl font-bold mb-10 text-gray-800">Login</h2>
                <div class="space-y-5">

                  <input onChange={(e) => setName(e.target.value)} class="w-full h-12 border border-gray-800 px-3 rounded-lg" placeholder="Email"  name="" type="text" />

                  <input onChange={(e) => setPassword(e.target.value)} class="w-full h-12 border border-gray-800 px-3 rounded-lg" placeholder="Password"  name="" type="password" />

                  <button onClick={handleLogin} class="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign in</button>
                 
                  </div>
              </div>
            </div>
          </div>
          

        )
   
}

export default Login
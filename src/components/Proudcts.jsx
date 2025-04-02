import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Products = () => {

    const {prodId} = useParams()

    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${prodId}`)
        .then(res => res.json())
        .then(res => setData(res))
    }, [])

    console.log(data)
    return(
        <div className="container m-auto mt-5 ">

    <div class="relative container border mt-15 flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <img src={data.images} class="relative border mx-4 -mt-6 h-40 overflow-hidden rounded-xl  bg-clip-border text-white shadow-lg  bg-gradient-to-r ">
        
    </img>
    <div class="p-6">
        <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        {data.title}
        </h5>
        <p class="block text-lg font-sans leading-relaxed text-inherit antialiased">
        {data.brand}
        </p>
        <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
        {data.price}
        </p>
        <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
        {data.catagory}
        </p>
    </div>


    </div>

        </div>
    )
}

export default Products
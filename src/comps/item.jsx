import { GiPieceSkull } from "react-icons/gi"; 
import { BsCartCheckFill } from "react-icons/bs"; 
import { TbError404 } from "react-icons/tb"; 
import { BsCircleFill } from "react-icons/bs"; 
import React , { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Item({ cart , cartsetter , data}) {
    const [pop, setPop] = useState(false);
    const { name , price} = useParams();
    const [item , setItem] = useState(null)




    useEffect(() => {

        if(!name || !price) return;
        console.log(typeof(price))
      data.forEach(element => {
        if(element.name === name && element.price.toString() === price.toString()){
            setItem(element)
        }
      });
    } , [name , price , data])


    function add(item){
        console.log("ommar")
        if(!cart.includes(item)){
            cartsetter(prev => [...prev ,item])
            setPop(true)
            setTimeout(() => {
              setPop(false)
            } , 2000)
        }
      }

      function image(value) {
        switch (value) {
          case "ram":
            return "./images/ram.png";
          case "gpu":
            return "./images/gpu.png";
          case "cpu":
            return "./images/cpu.png";
          case "board":
            return "./images/motherboard.png";
          case "monitor":
            return "./images/monitor2.png";
          default:
            return "./images/place.png";
        }
      }


  return (
    <>
        {pop ? <div className=" fixed flex justify-center items-center top-10 left-10 bg-white size-[200px] rounded-2xl text-7xl text-lime-500"><BsCartCheckFill /></div> : null}
        {item ? <div className=" mt-20">
            <div>
                <h1 className=" text-4xl ml-[15vw]">{item.name}</h1>
                <hr className=" border-2 w-[80vw] mx-auto"/>
            </div>
            <div className=" flex  items-center w-[80vw] mx-auto gap-16" >
                    <div><img src={image(item.cat)} className=" h-[100%]"/></div>
                
                <div>
                    <div className=" flex items-center">
                        <h1 className=" text-8xl">{item.price}$</h1>
                        <div className=" bg-gray-300 h-[120px] w-0.5 mx-10"></div>
                        {item.price !== null ?<div className=" flex items-center gap-3">
                            <BsCircleFill className=" text-lime-500"/>
                            <h1 className=" text-lime-500 text-2xl">In Stock</h1>
                        </div> : 
                        <div className=" flex items-center gap-3">
                            <BsCircleFill className=" text-red-600"/>
                            <h1 className=" text-red-600 text-2xl">Out Of Stock</h1>
                        </div>}
                    </div>
                    {item.price !== null  ? <button onClick={e => add(item)} className=" bg-second px-52 mt-7 py-3 rounded-xl hover:bg-primary">ADD TO CART</button>
                    : <div className=" mt-7"><span className=" bg-red-600 px-52 py-3 rounded-xl">Not Available</span></div>}
            </div>
            </div>
            <div className="w-[70vw] mx-auto">
                {Object.entries(item).map(([key, value]) => (
                <div key={key} className="text-gray-600">
                <strong>{key}: </strong>
                {/* Check if value is null or undefined */}
                {value === null || value === undefined ? (
                    <span className="text-gray-400">Not Available</span>
                ) : Array.isArray(value) ? (
                    value.join(', ')
                ) : (
                    value.toString()
                )}
                </div>
            ))}
            </div>
        </div> : <div className=" h-[20vw] text-center flex justify-center items-center">
                    <h1 className=" text-7xl text-second font-bold flex items-center gap-3">Error <TbError404 className="text-8xl"/> : Page Not found<GiPieceSkull className="text-black"/></h1>
                </div>}
    </>
  )
}

export default Item

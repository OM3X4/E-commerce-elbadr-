import { RiVisaLine } from "react-icons/ri"; 
import { RiMastercardFill } from "react-icons/ri"; 
import { FaCcVisa } from "react-icons/fa"; 
import { ImExit } from "react-icons/im"; 
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Cart({data , cartsetter}) {

    const [out , setOut] = useState(false)
    const [price , setPrice] = useState(0)
    const [pop , setPop] = useState(true)

    const popFunc = () => {
      setPop(true)
    }

    useEffect(() => {
        setPop(false)
        setOut(false)
        setPrice(0)
        data.map((item) => {
          item.price ? null : setOut(true)
        })
        !out ? data.forEach((item) => {
            setPrice(prev => prev + item.price)
      })
      : null
    },[ data ])





    function image(value){
        switch(value){
            case "ram":
                return "./images/ram.png";
            case "gpu" :
                return "./images/gpu.png";
            case "cpu":
                return "./images/cpu.png";
            case "board":
                return "./images/motherboard.png";
            case "monitor":
               return "./images/monitor2.png";
            default:
                "./images/place.png"
        }
    }

    function remove(e ,item){
        e.stopPropagation()
        e.preventDefault()
        const index = data.indexOf(item)
        const clone = [...data]
        clone.splice(index , 1)
        cartsetter(clone)
    }

  return (
    <>
       {data.length ? 
       <div className=' pt-40 bg-slate-200 pb-24'>
            {pop ?
                <div className=' flex justify-center items-center fixed top-[5vh] left-[20vw] h-[50vw]'>
                    <div className=' bg-slate-300 rounded-3xl w-[60vw] p-10 flex justify-center items-center flex-col h-[25vw]'>
                        <ImExit className=" self-end ml-20 text-5xl hover:text-red-600 cursor-pointer" onClick={e => setPop(false)}/>
                        <h1 className=' text-4xl font-bold'>Price : {price}</h1>
                        <h1 className=' text-4xl font-bold'>Tax : {Math.round(price * 0.14 * 100) / 100}</h1>
                        <h1 className=' text-4xl font-bold'>Total : {price + Math.round((price * 0.14) * 100) / 100}</h1>
                        <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none my-3 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200">
                        <RiVisaLine className=" text-3xl mr-2"/>
                        Pay wth Visa
                        </button>
                        <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                            <RiMastercardFill className=" text-3xl mr-2"/>
                            Pay with MasterCard
                        </button>
                    </div>
                </div>
            : null}
            <h1 className=' text-center text-8xl mb-20 font-bold'>Your Cart</h1>
            <div className="container flex justify-center bg-white rounded-xl py-20 max-w-[60vw]">
                <div className=' flex justify-center items-center flex-col w-full'>
                    <div className=' w-full flex flex-col justify-between items-center'>
                        <div className='flex justify-between px-7 items-center w-[80%]'><span className=' text-2xl'>Item</span><span className='text-2xl'>Price</span></div>
                        <hr className=' w-[80%] border-3 text-center border-slate-500  '/>
                    </div>
                    <div className=' w-full px-20 pr-32 flex justify-center items-center flex-col'>
                    {data.map((item , index) => {
                      return(
                        <Link key={index} to={`/item/${item.name}/${item.price}`}><div className=' flex justify-between items-center bg-gray-50 m-5 p-10 rounded-3xl w-[50vw] hover:bg-gray-200 transition-all duration-200'>
                            <div className=' flex items-center gap-6 '>
                                <img src={image(item.cat)} alt="" className=' h-28'/>
                                <h3 className=' text-l'>{item.name}</h3>
                                <button className=' bg-rose-600 py-1 px-2 rounded-lg text-sm hover:bg-rose-700
                                 text-white transition-all duration-200' onClick={e => remove(e ,item)}>Remove</button>
                            </div>
                            <h1 className=' text-4xl font-bold'>{item.price ? `${item.price}$` : "Out of Stock"}</h1>
                        </div></Link>
                      )
                    })}
                    </div>
                </div>
            </div>
            <div className=' flex justify-center items mt-10'>
                {!out ?
                <div className=' bg-white w-[60vw] h-32 flex justify-center items-center '>
                    <h1 className=' text-5xl font-bold'>Total : {price}$</h1>
                    <button type="button" onClick={popFunc} className=" customButton">Check Out</button>
                </div>
                 : 
                 <div className=' bg-white w-[60vw] h-32 flex justify-center items-center '>
                    <h1>There is An OutOfStock Item Please remove it</h1>
                </div>}
                
            </div>
       </div>
       :  <h1 className=" mt-20 text-6xl text-center font-bold">Your Cart is Empty</h1>}
    </>
  )
}

export default Cart

import { AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { IoMdCall } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { useState, useEffect, useRef } from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import cpus from "./Data/cpus";
import gpus from "./Data/gpus";
import mother from "./Data/mother";
import monitors from "./Data/monitors";
import ram from "./Data/ram";
import Home from "./comps/Home";
import Cart from "./comps/Cart";
import Search from "./comps/search";
import Cats from "./comps/cats";
import Item from "./comps/item";
import { data } from "autoprefixer";
import Error from "./comps/404";

function App() {
  const [input, setInput] = useState("");
  const [searchData , setSearchData] = useState([...cpus , ...gpus , ...mother , ...ram , ...monitors])
  const [cart , setCart] = useState([])



  function handleSearch(e){
    if(input){
      e.preventDefault()
    }
  }

  return (
    <>
      <Router>
        <nav className="">
          <div className="flex justify-between items-center">
            <div className="container flex justify-around items-center">
              <Link to={"/"}>
                <img src="./images/logo.png" alt="" className=" size-[100px]" />
              </Link>
              <div className="flex justify-between items-center w-fit ml-7">
                <input
                  placeholder="Search for what you want..."
                  onChange={(e) => setInput(e.target.value)}
                  className=" border-2 border-foot border-r-0 border-solid w-[40vw]
                            rounded-l-2xl py-[10px] pl-2  text-start "
                />
                {!input ? 
                <span>
                  <AiOutlineSearch
                    className="bg-black text-white text-5xl rounded-r-3xl p-3  
                            hover:bg-second transition duration-300 ease-in-out cursor-pointer"
                  />
                </span> 
                :<Link to={`/search/${input}`}>
                  <AiOutlineSearch
                    className="bg-black text-white text-5xl rounded-r-3xl p-3  
                             hover:bg-second transition duration-300 ease-in-out"
                  />
                </Link>}
              </div>
              <Link to={"/cart"}>
                <FaShoppingCart
                  className="bg-black text-white text-6xl rounded-3xl p-4
                         hover:bg-second transition duration-300 ease-in-out"
                />
              </Link>
            </div>
          </div>
          <div className="">
            <div className="sticky top-0 bg-black flex justify-center items-center h-10 m-0 z-10">
              <IoMdCall className=" text-white" />
              <span className="text-white ml-3">01551479902</span>
            </div>
          </div>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<Home data={[gpus[3], ram[33], monitors[47]]} setter={setSearchData} />}
          />
          <Route
            path="/cart"
            element={<Cart data={[...cart]} cartsetter={setCart}/>}
          />
          <Route path={"/search/:query?"} element={<Search dataProvided={searchData} cart={cart} cartsetter={setCart}/>} />
          <Route path={"/cats"} element={<Cats data={searchData}/>} />
          <Route path="/item/:name/:price" element={<Item data={searchData} cart={cart} cartsetter={setCart}/>}/>
          <Route path="*" element={<Error />}/>
        </Routes>
        <footer className=" mt-32">
          <div className=" bg-gray-100">
            <div className="container">
              <ul className=" h-60 flex justify-center flex-col">
                <li>
                  <h1 className=" text-3xl">About us</h1>
                </li>
                <hr className=" border-second border-t-2 w-20 my-4" />
                <li>
                  <Link to={"/about"}>
                    <h3>About us</h3>
                  </Link>
                </li>
                <li>
                  <Link to={"/delivery"}>
                    <h3>Delivery</h3>
                  </Link>
                </li>
                <li>
                  <Link to={"/privacy"}>
                    <h3>Privacy policy</h3>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="bg-gray-200 flex justify-center items-center h-12">
              <div className="container flex justify-center items-center gap-7">
                <a>
                  <BsFacebook className=" bg-white rounded-full text-1 p-1 size-[30px] cursor-pointer" />
                </a>
                <a>
                  <FaWhatsapp className=" bg-white rounded-full p-1 size-[30px] cursor-pointer" />
                </a>
                <a>
                  <BsInstagram className=" bg-white rounded-full p-1 size-[30px] cursor-pointer" />
                </a>
                <a href="">
                  <AiFillTwitterCircle className=" bg-white rounded-full p-1 size-[30px] cursor-pointer" />
                </a>
              </div>
            </div>
            <div className="bg-foot h-20 flex justify-center items-center">
              <div className="container">
                <h1 className=" text-center text-white">
                  Copyright © 2024 , elbadrgroupeg.com.
                </h1>
              </div>
            </div>
          </div>
        </footer>
      </Router>
    </>
  );
}

export default App;

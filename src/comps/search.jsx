import { BsCartCheckFill } from "react-icons/bs"; 
import React, { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Search({ dataProvided , cart , cartsetter}) {
  const { query } = useParams();
  
  const [pop , setPop] = useState(false)
  const [data, setData] = useState(dataProvided);

  function image(value) {
    switch (value) {
      case "ram":
        return "/images/ram.png";
      case "gpu":
        return "/images/gpu.png";
      case "cpu":
        return "/images/cpu.png";
      case "board":
        return "/images/motherboard.png";
      case "monitor":
        return "/images/monitor2.png";
      default:
        return "/images/place.png";
    }
  }

  function details(value, item) {
    switch (value) {
      case "ram":
        return `Ram - Speed : ${item.speed[1]}`;
      case "gpu":
        return `GPU - ${item.chipset}`;
      case "cpu":
        return `CPU - Cores : ${item.core_count}`;
      case "board":
        return `Board - Socket : ${item.socket}`;
      case "monitor":
        return `Monitro - ${item.resolution[1]} | ${item.refresh_rate}hz`;
      default:
        return "-------";
    }
  }

  function arranging(e) {
    console.log(e.target.value);
    const sortedData = [...data]; // Create a copy of the array
    switch (e.target.value) {
      case "1":
        setData([...data]); // Reset to original order
        break;
      case "2":
        sortedData.sort((a, b) => (a.price || 0) - (b.price || 0));
        setData([...sortedData]);
        break;
      case "3":
        sortedData.sort((a, b) => (b.price || 0) - (a.price || 0));
        setData([...sortedData]);
        break;
      default:
        setData([...data]); // Default case
    }
  }

  function add(e ,item){
    e.stopPropagation()
    e.preventDefault()
    if(!cart.includes(item)){
        cartsetter(prev => [...prev ,item])
        setPop(true)
        setTimeout(() => {
          setPop(false)
        } , 2000)
    }
  }

  return (
    <>
    {pop ? <div className=" fixed flex justify-center items-center top-10 left-10 bg-white size-[200px] rounded-2xl text-7xl text-lime-500"><BsCartCheckFill /></div> : null}
      <div className="">
        <div className="mt-20">
          <h1 className=" text-5xl px-32 mb-2">Search - {query}</h1>
          <hr className=" border-2 border-gray-300 w-[90vw] text-center mx-auto" />
        </div>
        <div className=" mt-10 flex justify-center items-center gap-6">
          <span className=" bg-second py-1 px-5 rounded-3xl">Sort By</span>
          <select
            name=""
            id=""
            className=" py-2 px-5 rounded-3xl"
            onChange={(e) => arranging(e)}
          >
            <option value="1">Default</option>
            <option value="2">Price : Low to High</option>
            <option value="3">Price : High to Low</option>
          </select>
        </div>
        <div className="mt-10 flex justify-center items-center flex-wrap mx-12">
          {data
            .filter(
              (item) =>
                item.name.toLowerCase().includes(query.toLowerCase()) ||
                (item.cat === "gpu" && item.chipset.toLowerCase().includes(query.toLowerCase())) || item.cat.includes(query.toLowerCase())
            )
            .map((item, index) => (
              <Link to={`/item/${item.name}/${item.price}`} key={index}><div
                
                className="border-2 border-gray-200 m-5 py-5 rounded-xl w-[25vw] flex justify-center items-center flex-col hover:bg-gray-200"
              >
                <img src={image(item.cat)} className="h-54" alt={item.name} />
                <div className="bg-gray-400 w-full text-center py-1 text-xl">
                  {details(item.cat, item)}
                </div>
                <h1 className="font-bold text-2xl mt-4 mx-2">{item.name}</h1>
                <h1 className="font-bold text-2xl mt-4">
                  {item.price ? item.price : "Out Of Stock"}
                </h1>
                {item.price ?<button className=" bg-second py-3 w-[90%] rounded-2xl font-bold mt-4 hover:bg-primary"
                onClick={e => add(e , item)}>ADD TO CART</button>
              :<span className=" bg-red-600 py-3 w-[90%] rounded-2xl font-bold mt-4 text-center">Not Available</span>}
              </div></Link>
            ))}
        </div>
      </div>
    </>
  );
}

export default Search;

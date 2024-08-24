import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cpus from "../Data/cpus";
import gpus from "../Data/gpus";
import monitors from "../Data/monitors";
import ram from "../Data/ram";
import mother from "../Data/mother";


function Home({ data , setter}) {
  const [imageIndex, setImageIndex] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(imageIndex => !imageIndex)
      console.log(imageIndex);
      
    } , 5000)

    return () => clearInterval(interval)
    }, [])
  
  useEffect(() => {
    console.log(imageIndex)
  } , [imageIndex])

  return (
    <>
      <div>
        <div>
          <img
            src={imageIndex ? "./images/lander1.png" : "./images/lander2.png"}
            alt=""
          />
        </div>
        <div className="bg-gray-200 h-24"></div>
        <div className="mt-24">
          <div className="container">
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-7xl font-bold">Shop By Category</h1>
              <hr className="border-second border-t-2 w-96 my-4" />
              <p className="text-gray-400">
                CHECK LATEST PRODUCTS FROM FEATURES CATEGORIES...
              </p>
            </div>
            <div className="mt-20 flex justify-center items-center">
              <div
                className="bg-slate-100 rounded-md border-2 border-gray-300 flex justify-center items-center 
                        flex-col p-6 cursor-pointer hover:bg-slate-300 m-[15px]"
              >
                <Link to={"/search/cpu"}>
                  <img src="./images/cpu.png" alt="" className="h-[150px]" />
                </Link>
                <h4 className="font-bold">CPUs</h4>
              </div>
              <div
                className="bg-slate-100 rounded-md border-2 border-gray-300 flex justify-center items-center 
                        flex-col p-6 cursor-pointer hover:bg-slate-300 m-[15px]"
              >
                <Link to={"/search/gpu"}>
                  <img src="./images/gpu.png" alt="" className="h-[150px]" />
                </Link>
                <h4>GPUs</h4>
              </div>
              <div
                className="bg-slate-100 rounded-md border-2 border-gray-300 flex justify-center items-center 
                        flex-col p-6 cursor-pointer hover:bg-slate-300 m-[15px]"
              >
                <Link to={"/search/monitor"}>
                  <img
                    src="./images/monitor2.png"
                    alt=""
                    className="h-[150px]"
                  />
                </Link>
                <h4>Monitors</h4>
              </div>
              <div
                className="bg-slate-100 rounded-md border-2 border-gray-300 flex justify-center items-center 
                        flex-col p-6 cursor-pointer hover:bg-slate-300 m-[15px]"
              >
                <Link to={"/search/board"}>
                  <img
                    src="./images/motherboard.png"
                    alt=""
                    className="h-[150px]"
                  />
                </Link>
                <h4>Mother Boards</h4>
              </div>
              <div
                className="bg-slate-100 rounded-md border-2 border-gray-300 flex justify-center items-center 
                        flex-col p-6 cursor-pointer hover:bg-slate-300 m-[15px]"
              >
                <Link to={"/search/ram"}>
                  <img src="./images/ram.png" alt="" className="h-[150px]" />
                </Link>
                <h4>Ram kits</h4>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 w-full p-7 mt-20">
            <div className="flex justify-center items-center flex-col mt-20">
              <h1 className="text-7xl font-bold">Best sellers</h1>
              <hr className="border-second border-t-2 w-96 my-4" />
              <p>best selling products on the site take a look!!</p>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center w-[70vw]">
                <div
                  className="bg-slate-100 rounded-md border-2 border-gray-300 flex justify-center items-center 
                            flex-col p-5 cursor-pointer hover:bg-slate-300 m-[15px]"
                >
                  <Link to={`/item/${data[0].name}/${data[0].price}`}>
                    <img
                      src={`./images/${data[0].cat}.png`}
                      alt=""
                      className="bg-gray-100 w-[70vw] p-5 mt-15 bg-transparent"
                    />
                  </Link>
                  <h4>{data[0].name}</h4>
                </div>
                <div
                  className="bg-slate-100 rounded-md border-2 border-gray-300 flex justify-center items-center 
                            flex-col p-5 cursor-pointer hover:bg-slate-300 m-[15px]"
                >
                  <Link to={`/item/${data[1].name}/${data[1].price}`}>
                    <img
                      src={`./images/${data[1].cat}.png`}
                      alt=""
                      className="bg-gray-100 w-[70vw] p-5 mt-15 bg-transparent"
                    />
                  </Link>
                  <h4>{data[1].name}</h4>
                </div>
                <div
                  className="bg-slate-100 rounded-md border-2 border-gray-300 flex justify-center items-center 
                            flex-col p-5 cursor-pointer hover:bg-slate-300 m-[15px]"
                >
                  <Link to={`/item/${data[2].name}/${data[2].price}`}>
                    <img
                      src={`./images/${data[2].cat}2.png`}
                      alt=""
                      className="bg-gray-100 w-[80vw] p-5 mt-15 bg-transparent"
                    />
                  </Link>
                  <h4>{data[2].name}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-7xl font-bold">Economic GPUs</h1>
              <hr className="border-second border-t-4 w-96 my-4" />
              <p className="text-gray-400">We have products for everyone</p>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center w-[70vw]">
                <div
                  className="bg-slate-100 rounded-md border-2 border-gray-300 flex justify-center items-center 
                            flex-col p-5 cursor-pointer hover:bg-slate-300 m-[15px] h-[400px] overflow-hidden">
                  <Link to={`/item/${data[0].name}/${data[0].price}`}>
                    <img src={`./images/${data[0].cat}.png`}alt=""className="bg-gray-100 p-5 mt-15 bg-transparent h-[20vw]"/>
                  </Link>
                  <h4>{data[0].name}</h4>
                </div>
                <div className="bg-slate-100 rounded-md border-2 border-gray-300 flex justify-center items-center 
                            flex-col p-5 cursor-pointer hover:bg-slate-300 m-[15px] h-[400px]">
                  <Link to={`/item/${data[1].name}/${data[1].price}`}>
                    <img src={`./images/${data[1].cat}.png`}alt="" className="bg-gray-100 p-5 mt-15 bg-transparent"/>
                  </Link>
                  <h4>{data[1].name}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

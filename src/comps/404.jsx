import React from 'react'
import { GiPieceSkull } from "react-icons/gi"; 
import { TbError404 } from "react-icons/tb"; 

function Error() {
  return (
    <>
        <div className=" h-[20vw] text-center flex justify-center items-center">
            <h1 className=" text-7xl text-second font-bold flex items-center gap-3">Error <TbError404 className="text-8xl"/> : Page Not found<GiPieceSkull className="text-black"/></h1>
        </div>
    </>
  )
}

export default Error
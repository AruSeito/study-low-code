import React, { useContext } from "react";
import { CanvasContext } from "../context/canvasContext";


const MainCanvas:React.FC = ()=>{
  const {comps} = useContext(CanvasContext);
  return <>{comps.map((Comp:any)=>{
    return <Comp.c />
  })}</>;
}

export default MainCanvas;
import React, { useContext } from "react";
import { CanvasContext } from "../context/canvasContext";


const MainCanvas:React.FC = ()=>{
  const {comps} = useContext(CanvasContext);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    if (!e) return;
    const id = (e.target as HTMLDivElement).dataset.id as string;
    e.dataTransfer.setData('id', id);
    e.dataTransfer.setData("change",JSON.stringify(true));
  };

  return <div onDragStart={handleDragStart}>{comps.map((Comp:any)=>{
    return (
      <section
        draggable={true}
        className="item"
        data-id={Comp.id}
        key={Comp.id}
      >
        <Comp.c style={Comp.style} />
      </section>
    );
  })}</div>;
}

export default MainCanvas;
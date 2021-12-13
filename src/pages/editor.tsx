import React, { useCallback, useContext } from "react";
import { options } from "../components/built-in-components";
import LeftCompList from "../modules/componentList";
import { deepCopy, hash } from "../utils";
import MainCanvas from "../modules/mainCanvas";
import { CanvasContext } from "../context/canvasContext";


const EditorPage = ()=>{
  const {comps,updateComps} = useContext(CanvasContext);
  const handleDragOver = useCallback((e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.dataTransfer.getData('id'));
    const component = deepCopy(options[e.dataTransfer.getData('id')]);
    component.style.top = e.clientX;
    component.style.left = e.clientY;
    component.id = hash();
    console.log(component);
    updateComps([...comps, component]);
  }, [comps, updateComps]);

  return (
    <div className="flex flex-col h-full">
      <div className="border-b h-[50px]">toolbar</div>
      <div className="flex h-[calc(100vh-50px)]">
        <aside className="flex-1 border-r h-full">
          <LeftCompList />
        </aside>
        <div
          className="flex-[2] h-full"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
            <MainCanvas />
        </div>
        <aside className="flex-1 border-l h-full">attribute</aside>
      </div>
    </div>
  );
}

export default EditorPage;
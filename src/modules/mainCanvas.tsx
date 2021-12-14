import React, { useContext } from 'react';
import Sharp from '../components/sharp';
import { CanvasContext } from '../context/canvasContext';

const MainCanvas: React.FC = () => {
  const { comps } = useContext(CanvasContext);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    if (!e) return;
    const id = (e.target as HTMLDivElement).dataset.id as string;
    e.dataTransfer.setData('id', id);
    e.dataTransfer.setData('change', JSON.stringify(true));
  };

  return (
    <div onDragStart={handleDragStart} className="canvasContainer">
      {comps.map((Comp: any) => {
        return (
          <Sharp
            style={Comp.style}
            componentId={Comp.id}
            key={Comp.id}
          >
            <Comp.c />
          </Sharp>
        );
      })}
    </div>
  );
};

export default MainCanvas;

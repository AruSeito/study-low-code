import React from 'react';
import { componentList } from '../components/built-in-components/index';

const LeftCompList: React.FC = () => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    if (!e) return;
    const id = (e.target as HTMLDivElement).dataset.id as string;
    e.dataTransfer.setData('id', id);
  };
  return (
    <div onDragStart={handleDragStart}>
      {componentList.map((comp) => (
        <section draggable={true} className="item" data-id={comp.key} key={comp.key}>
          <span>{<comp.c style={comp.style} label={comp.label}/>}</span>
        </section>
      ))}
    </div>
  );
};

export default LeftCompList;

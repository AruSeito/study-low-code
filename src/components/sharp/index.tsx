import React, { useCallback, useRef } from 'react';

interface IProps{
  style:React.CSSProperties;
  componentId:string;
}
const Sharp: React.FC<IProps> = (props) => {
  const sharpRef = useRef<HTMLDivElement>(null);
  const {style,componentId} = props;
  const handleMouseDown = useCallback(()=>{
    const container = document.querySelector('.canvasContainer');
    if(!container) return;
    const { x, y } = container.getBoundingClientRect();
    console.log(x,y);
  },[])
  return (
    <div
      className="sharp absolute"
      ref={sharpRef}
      draggable={true}
      style={style}
      data-id={componentId}
      onMouseDown={handleMouseDown}
    >
      {props.children}
    </div>
  );
};

export default Sharp;

import React from 'react';

interface IProps {
  handleDrop?: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragOver?: (e: React.DragEvent<HTMLDivElement>) => void;
  handleOnClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Container: React.FC<IProps> = (props) => {
  const { handleDrop, handleDragOver, handleOnClick } = props;
  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={handleOnClick}
      className="w-full min-h-[30px] border-1 bg-cool-gray-200"
    >
      {props.children}
    </div>
  );
};

export default Container;

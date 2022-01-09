import React from 'react';

interface IProps {
  handleDrop?: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragOver?: (e: React.DragEvent<HTMLDivElement>) => void;
}

const Container: React.FC<IProps> = (props) => {
  const { handleDrop, handleDragOver } = props;
  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="w-full min-h-[30px] border-1 bg-cool-gray-200"
    >
      {props.children}
    </div>
  );
};

export default Container;

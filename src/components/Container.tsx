import React from 'react';

interface IProps {
  jsonScheme?: Record<string, any>;
  handleDrop?: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragOver?: (e: React.DragEvent<HTMLDivElement>) => void;
}

const Container: React.FC<IProps> = (props) => {
  const { handleDrop, handleDragOver } = props;
  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="w-full min-h-[30px]"
    >
      {props.children}
    </div>
  );
};

Container.defaultProps = {
  jsonScheme: {},
};

export default Container;

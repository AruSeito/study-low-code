import React from 'react';
import { useDispatch } from 'react-redux';
import { addNodeIntoContainer } from '../redux/reducers/editSlice';
import Container from './Container';

interface IProps {
  jsonScheme: Record<string, any>;
  addNode?: string;
}

const ParserContainer: React.FC<IProps> = (props) => {
  const { jsonScheme, addNode } = props;

  const dispatch = useDispatch();

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const { componentId } = jsonScheme;

    dispatch(
      addNodeIntoContainer({
        addType: addNode,
        targetComponentId: componentId,
      }),
    );
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  return (
    <Container
      {...props}
      handleDrop={handleDrop}
      handleDragOver={handleDragOver}
    >
      {props.children}
    </Container>
  );
};

export default ParserContainer;

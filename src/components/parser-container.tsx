import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { addNodeIntoContainer } from '../redux/reducers/editSlice';
import Container from './Container';
import { EditorContext } from '../context/editorContext';


interface IProps {
  jsonScheme: Record<string, any>;
  addNode?: string;
}

const ParserContainer: React.FC<IProps> = (props) => {
  const { jsonScheme, addNode } = props;
  const dispatch = useDispatch();

  const { updateSelectedType } = useContext(EditorContext);

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

  const handleOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    const {type} = jsonScheme;
    console.log("click");
    // 这个有点问题，最好通过enum来读。
    updateSelectedType(type);
  };

  return (
    <Container
      {...props}
      handleDrop={handleDrop}
      handleDragOver={handleDragOver}
      handleOnClick={handleOnClick}
    >
      {props.children}
    </Container>
  );
};

export default ParserContainer;

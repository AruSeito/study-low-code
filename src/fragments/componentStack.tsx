import React, { useContext } from 'react';
import { componentList } from '../components';
import { EditorContext } from '../context/editorContext';

const ComponentStack: React.FC = () => {
  const { updateSelectType } = useContext(EditorContext);

  const onHandleDrag = (item: Record<string, any>) => {
    updateSelectType(item.name);
  };
  return (
    <>
      <div className="component-stack">物料堆</div>
      <ul>
        {componentList.map((info) => (
          <li
            draggable
            onDrag={() => {
              onHandleDrag(info);
            }}
            className="border-1 border-gray-900 my-[2px] mx-[5px] px-0 py-[10px]"
            key={info.name}
          >
            <info.Component />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ComponentStack;

import { Grid } from '@arco-design/web-react';
import React, { useState } from 'react';
import RenderEngine from '../fragments/renderEngine';
import { componentList } from '../components';
import { addNodeIntoRoot, selectJSONScheme } from '../redux/reducers/editSlice';
import { useDispatch, useSelector } from 'react-redux';

const Row = Grid.Row;
const Col = Grid.Col;

const MainPage: React.FC = () => {
  const [selectType, updateSelectType] = useState<string>('');

  const currentJson = useSelector(selectJSONScheme);
  const dispatch = useDispatch();

  const onHandleDrag = (item: Record<string, any>) => {
    updateSelectType(item.name);
  };

  const onHandleDropContainer = (e: React.DragEvent<HTMLDivElement>) => {
    dispatch(addNodeIntoRoot(selectType));
  };

  const onHandleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="header h-[10vh]">顶栏</div>
      <div className="main-content">
        <Row className="grid-demo" style={{ marginBottom: 16 }}>
          <Col span={4}>
            <div className=" h-[90vh] border-1 border-gray-500">
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
            </div>
          </Col>
          <Col span={16}>
            <div
              className="stage h-[90vh] border-1 border-gray-500"
              onDrop={onHandleDropContainer}
              onDragOver={onHandleDragOver}
            >
              <RenderEngine scheme={currentJson} addNode={selectType} />
            </div>
          </Col>
          <Col span={4}>
            <div className="config-panel h-[90vh] border-1 border-gray-500">
              配置栏
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MainPage;

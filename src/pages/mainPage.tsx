import { Grid } from '@arco-design/web-react';
import React, { useRef, useState } from 'react';
import RenderEngine from '../fragments/renderEngine';
import { componentList } from '../components';

const Row = Grid.Row;
const Col = Grid.Col;

// 从props传进来的
const fakeJsonScheme = {
  page: {
    type: 'Container',
    children: [
      {
        type: 'Container',
        children: [
          {
            type: 'CButton',
          },
          { type: 'CInput' },
        ],
      },
    ],
  },
};


const MainPage: React.FC = () => {
  const [components, updateComponents] = useState<React.FC[]>([
    ...componentList,
  ]);

  const selectType = useRef<React.FC>()
  const onHandleDrag = (item: React.FC) => {
    selectType.current = item;
  };

  const onHandleDropContainer = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e);
    updateComponents([...components, selectType.current!]);
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
                {componentList.map((Component) => (
                  <li
                    draggable
                    onDrag={() => {
                      onHandleDrag(Component);
                    }}
                    className="border-1 border-gray-900 my-[2px] mx-[5px] px-0 py-[10px]"
                  >
                    <Component />
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
              <RenderEngine scheme={fakeJsonScheme} />
              
              {/* {components.map((component) => (
                <li className="border-1 border-gray-900 my-[2px] mx-[5px] px-0 py-[10px]">
                  {component}
                </li>
              ))} */}
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

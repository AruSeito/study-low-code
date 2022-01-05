import { Grid } from '@arco-design/web-react';
import React from 'react';
import RenderEngine from '../fragments/renderEngine';

const Row = Grid.Row;
const Col = Grid.Col;

const components = ['CButton','CInput'];

  // 从props传进来的
const fakeJsonScheme = {
  page: {
    type: 'Container',
    children: [
      {
        type: 'Container',
        children: [
          {
            type: 'button',
          },
          { type: 'input' },
        ],
      },
    ],
  },
};

const MainPage: React.FC = () => {
  return (
    <div>
      <div className="header h-[10vh]">顶栏</div>
      <div className="main-content">
        <Row className="grid-demo" style={{ marginBottom: 16 }}>
          <Col span={4}>
            <div className=" h-[90vh] border-1 border-gray-500">
              <div className="component-stack">物料堆</div>
              <ul>
                {components.map((component) => (
                  <li>{component}</li>
                ))}
              </ul>
            </div>
          </Col>
          <Col span={16}>
            <div className="stage h-[90vh] border-1 border-gray-500">
              <RenderEngine scheme={fakeJsonScheme} />
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

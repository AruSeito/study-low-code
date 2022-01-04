import { Grid } from '@arco-design/web-react';
import React from 'react';

const Row = Grid.Row;
const Col = Grid.Col;

const MainPage: React.FC = () => {
  return (
    <div>
      <div className="header">顶栏</div>
      <div className="main-content">
        <Row className="grid-demo" style={{ marginBottom: 16 }}>
          <Col span={4}>
            <div className='component-stack'>物料堆</div>
          </Col>
          <Col span={16}>
            <div className='stage'>画布</div>
          </Col>
          <Col span={4}>
            <div className='config-panel'>配置栏</div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MainPage;

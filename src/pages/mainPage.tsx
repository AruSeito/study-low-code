import { Grid } from '@arco-design/web-react';
import React, { useContext } from 'react';
import RenderEngine from '../fragments/renderEngine';
import { addNodeIntoRoot, selectJSONScheme } from '../redux/reducers/editSlice';
import { useDispatch, useSelector } from 'react-redux';
import { EditorContext } from '../context/editorContext';
import ComponentStack from '../fragments/componentStack';
import ConfigPanel from '../fragments/configPanel';

const Row = Grid.Row;
const Col = Grid.Col;

const MainPage: React.FC = () => {
  const { addType } = useContext(EditorContext);

  const currentJson = useSelector(selectJSONScheme);
  const dispatch = useDispatch();

  const onHandleDropContainer = (e: React.DragEvent<HTMLDivElement>) => {
    dispatch(addNodeIntoRoot(addType));
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
              <ComponentStack />
            </div>
          </Col>
          <Col span={16}>
            <div
              className="stage h-[90vh] border-1 border-gray-500 overflow-scroll"
              onDrop={onHandleDropContainer}
              onDragOver={onHandleDragOver}
            >
              <RenderEngine scheme={currentJson} addNode={addType} />
            </div>
          </Col>
          <Col span={4}>
            <div className="config-panel h-[90vh] border-1 border-gray-500">
              配置栏
              <ConfigPanel />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MainPage;

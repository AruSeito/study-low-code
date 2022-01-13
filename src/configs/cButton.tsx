import React, { useContext } from 'react';
import { Select } from '@arco-design/web-react';
import { EditorContext } from '../context/editorContext';
import { useDispatch } from 'react-redux';
import { changeNodeProps } from '../redux/reducers/editSlice';

const Option = Select.Option;
const optionsType = [
  'default',
  'primary',
  'secondary',
  'dashed',
  'text',
  'outline',
];
const optionsSize = ['mini' , 'small' , 'default' , 'large']

const CButton: React.FC = () => {
  const { selectedCompId } = useContext(EditorContext);

  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <span>尺寸</span>
        <Select
          placeholder="Please select"
          style={{ width: 154 }}
          onChange={(value) => {
            dispatch(
              changeNodeProps({
                targetComponentId: selectedCompId,
                propKey: 'type',
                propValue: value,
              }),
            );
          }}
        >
          {optionsType.map((option) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      </div>
      <div>
        <span>类型</span>
        <Select
          placeholder="Please select"
          style={{ width: 154 }}
          onChange={(value) => {
            dispatch(
              changeNodeProps({
                targetComponentId: selectedCompId,
                propKey: 'size',
                propValue: value,
              }),
            );
          }}
        >
          {optionsSize.map((option) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default CButton;

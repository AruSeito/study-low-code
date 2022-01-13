import React, { useContext } from 'react';
import CButton from './cButton';
import { EditorContext } from '../context/editorContext';

interface IProps {
  jsonScheme: Record<string, any>;
  type?: 'default' | 'primary' | 'secondary' | 'dashed' | 'text' | 'outline';
  size?: 'mini' | 'small' | 'default' | 'large';

}
// 假装CButton是自己写的，
// 这里进行一些自己的逻辑封装
const ParserButton: React.FC<IProps> = (props) => {
  const { jsonScheme } = props;
  const { updateSelectedType,updateSelectedComId } = useContext(EditorContext);

  const handleOnClick = (e: Event) => {
    e.stopPropagation();
    const { type, componentId } = jsonScheme;
    console.log('click');
    // 这个有点问题，最好通过enum来读。
    updateSelectedType(type);
    updateSelectedComId(componentId);
  };

  const { props:buttonProps } = jsonScheme;
  return (
    <CButton handleOnClick={handleOnClick} {...buttonProps}>
      {props.children ?? '按钮'}
    </CButton>
  );
};

ParserButton.defaultProps = {
  type:"default",
  size:"default",
}

export default ParserButton;

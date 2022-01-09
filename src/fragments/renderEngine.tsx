import React, { ReactNode } from 'react';
import { parserList } from '../components';

interface IProps {
  scheme: Record<string, any>;
  addNode?: string;
}

const RenderEngine: React.FC<IProps> = (props) => {
  const { scheme = {}, addNode } = props;

  const startRender = (
    section: Record<string, any>,
    children?: ReactNode | null,
  ) => {
    // TODOS: 类型需要完善一下暂时先都用any 这么处理一下吧。目前还没决定dsl要怎么搞，只是有个大概模子。
    const type = section.type as 'CButton' | 'CInput' | 'Container';
    const { componentId } = section;
    const RenderMod = parserList[type];
    // 直接渲染
    if (RenderMod) {
      return (
        <RenderMod jsonScheme={section} addNode={addNode} key={componentId}>
          {children}
        </RenderMod>
      );
    }
    return null;
  };

  const renderChildren = (section: Record<string, any>) => {
    let nodeArray = section.children || ([] as any).concat(section);

    return nodeArray.map((node: any, idx: number) => {
      return renderComponents(node);
    });
  };

  // 渲染组件
  const renderComponents = (section: Record<string, any>) => {
    // 取出children
    let children = null;
    if (section.children) {
      children = renderChildren(section.children);
    }

    return startRender(section, children);
  };

  // 渲染根节点
  const renderRoot = (scheme: Record<string, any>) => {
    // 全局配置可以在这操作
    const page = scheme.page;
    return <div className="root">{renderComponents(page)}</div>;
  };

  return renderRoot(scheme);
};

export default RenderEngine;

import React, { ReactNode } from 'react';


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

const RenderEngine: React.FC = () => {
  const startRender = (
    section: Record<string, any>,
    children?: ReactNode | null,
  ) => {
    const type = section.type;
    // 直接渲染
    return <div></div>
  };

  const renderChildren = (section:Record<string,any>)=>{
    let nodeArray = section.children || ([] as any).concat([section]);

    return nodeArray.map((node:any,idx:number)=>{
      return renderComponents(node)
    })
  }

  // 渲染组件
  const renderComponents = (section: Record<string, any>) => {
    let children = null;
    if(section.children){
      children = renderChildren(section.children);
    }
    return startRender(section,children);
  };

  // 渲染根节点
  const renderRoot = (scheme: Record<string, any>) => {
    const page = scheme.page;

    return <div className='root'>{renderComponents(page)}</div>;
  };

  return renderRoot(fakeJsonScheme);
};

export default RenderEngine;

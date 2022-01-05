import React, { ReactNode } from 'react';


interface IProps{
  scheme:Record<string,any>
}

const RenderEngine: React.FC<IProps> = (props) => {
  const {scheme} = props;
  const startRender = (
    section: Record<string, any>,
    children?: ReactNode | null,
  ) => {
    const type = section.type;
    // 直接渲染
    console.log(type);
    return <div></div>
  };

  const renderChildren = (section:Record<string,any>)=>{
    let nodeArray = section.children || ([] as any).concat(section);

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

  return renderRoot(scheme);
};

export default RenderEngine;

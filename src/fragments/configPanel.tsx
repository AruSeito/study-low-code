import React,{useContext, useMemo} from "react";
import { EditorContext } from '../context/editorContext';
import { configList } from '../configs';


const ConfigPanel:React.FC = ()=>{
  const { selectedType } = useContext(EditorContext);

  const renderSelectedPanel = useMemo(()=>{
    // TODOS: 类型有问题需要完善一下，暂时这么处理
    const ConfigMod = configList[selectedType as "Container"];
    return <ConfigMod />
  },[selectedType])

  const renderEmptyPanel = useMemo(()=>{
    return <div>not selected</div>
  },[])
  return selectedType ? renderSelectedPanel : renderEmptyPanel;
}

export default ConfigPanel;
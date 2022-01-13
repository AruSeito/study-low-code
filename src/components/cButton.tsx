import React from "react";
import { Button } from "@arco-design/web-react";

interface IProps {
  handleOnClick?:(e:Event)=>void;
}

const CButton : React.FC<IProps> = (props)=>{
  const {handleOnClick} = props;
  console.log(props)
  return <Button onClick={handleOnClick} {...props}>{props.children}</Button>;
}

export default CButton;
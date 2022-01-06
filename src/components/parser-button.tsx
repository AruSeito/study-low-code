import React from "react";
import  CButton  from "./cButton";

// 假装CButton是自己写的，
// 这里进行一些自己的逻辑封装
const ParserButton: React.FC = (props) => {

  return <CButton>{props.children}</CButton>;
};

export default ParserButton;
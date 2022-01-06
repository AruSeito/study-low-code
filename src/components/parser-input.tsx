import React from "react";
import CInput from "./cInput";

const ParserInput: React.FC = (props) => {
  
  return <CInput>{props.children}</CInput>;
};

export default ParserInput;
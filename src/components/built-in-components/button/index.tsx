import React from "react";

interface IProps {
  style: React.CSSProperties;
  label: string;
}
const Button:React.FC<IProps> = (props) => {
  const {style,label} = props;
  return (
    <button className="" style={{ ...style }}>
      {label}
    </button>
  );
};

Button.defaultProps= {
  style:{},
  label:"按钮"
}

export default Button;
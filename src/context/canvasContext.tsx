import React, { useState } from "react";

export const CanvasContext = React.createContext<any>([]);

export const CanvasContextProvider:React.FC = (props)=>{
  const [comps,updateComps] = useState<any>([])
  const value = {
    comps,
    updateComps
  }
  return (
    <CanvasContext.Provider value={value}>
      {props.children}
    </CanvasContext.Provider>
  );
}

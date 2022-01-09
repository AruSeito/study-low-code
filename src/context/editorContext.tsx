import React, { useState } from 'react';

export const EditorContext = React.createContext<any>([]);

export const EditorContextProvider: React.FC = (props) => {
  const [selectType, updateSelectType] = useState<string>('');

  const value = {
    selectType,
    updateSelectType,
  };
  return (
    <EditorContext.Provider value={value}>
      {props.children}
    </EditorContext.Provider>
  );
};

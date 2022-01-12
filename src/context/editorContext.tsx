import React, { useState } from 'react';

interface IContext {
  addType: string;
  updateAddType: React.Dispatch<React.SetStateAction<string>>;
}
const defaultValue = {
  addType: '',
  updateAddType: () => {},
};

export const EditorContext = React.createContext<IContext>(defaultValue);

export const EditorContextProvider: React.FC = (props) => {
  const [addType, updateAddType] = useState<string>('');

  const value = {
    addType,
    updateAddType,
  };
  return (
    <EditorContext.Provider value={value}>
      {props.children}
    </EditorContext.Provider>
  );
};

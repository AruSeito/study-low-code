import React, { useState } from 'react';

interface IContext {
  addType: string;
  updateAddType: React.Dispatch<React.SetStateAction<string>>;
  selectedType: string;
  updateSelectedType: React.Dispatch<React.SetStateAction<string>>;
  selectedCompId: string;
  updateSelectedComId: React.Dispatch<React.SetStateAction<string>>;
}
const defaultValue = {
  addType: '',
  updateAddType: () => {},
  selectedType: '',
  updateSelectedType: () => {},
  selectedCompId: '',
  updateSelectedComId: () => {},
};

export const EditorContext = React.createContext<IContext>(defaultValue);

export const EditorContextProvider: React.FC = (props) => {
  const [addType, updateAddType] = useState<string>('');
  const [selectedType, updateSelectedType] = useState<string>('');
  const [selectedCompId, updateSelectedComId] = useState<string>("");

  const value = {
    addType,
    updateAddType,
    selectedType,
    updateSelectedType,
    selectedCompId,
    updateSelectedComId,
  };
  return (
    <EditorContext.Provider value={value}>
      {props.children}
    </EditorContext.Provider>
  );
};

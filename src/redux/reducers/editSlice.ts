import { createSlice } from '@reduxjs/toolkit';
import { findCompById, genCompId } from '../../utils';
import { RootState } from '../store';

interface IState {
  JSONScheme: Record<string, any>;
}

const initialState: IState = {
  JSONScheme: {
    page: {},
  },
};

export const editSlice = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    addNodeIntoRoot: (state, action) => {
      const { JSONScheme } = state;
      const _page = JSONScheme.page;
      if (!_page.type) {
        const rootContainerId = genCompId();
        _page.type = 'Container';
        _page.componentId = rootContainerId;
        _page.children = [];
      }

      if (_page.type !== 'Container') {
        const oldPage = JSON.parse(JSON.stringify(_page));
        const rootContainerId = genCompId();
        _page.type = 'Container';
        _page.componentId = rootContainerId;
        _page.children = [oldPage];
      }
      const addType = action.payload;
      const componentId = genCompId();
      _page.children.push({ type: addType, componentId });
      state.JSONScheme.page = _page;
    },
    addNodeIntoContainer: (state, action) => {
      const { targetComponentId, addType } = action.payload;
      const { JSONScheme } = state;
      const _page = JSONScheme.page;
      const targetNode = findCompById(_page, targetComponentId);
      if (targetNode && targetNode.type === 'Container') {
        if (!targetNode.children) {
          targetNode.children = [];
        }
        targetNode.children.push({ type: addType });
      }
    },
    changeNodeProps:(state,action)=>{
      const { targetComponentId, propKey,propValue } = action.payload;
      const { JSONScheme } = state;
      const _page = JSONScheme.page;
      const targetNode = findCompById(_page, targetComponentId);
      if(targetNode){
        if(!targetNode.props){
          targetNode.props= {};
        }
        targetNode.props[propKey] = propValue;
      }
    }
  },
});

export const { addNodeIntoRoot, addNodeIntoContainer, changeNodeProps } =
  editSlice.actions;

export const selectJSONScheme = (state: RootState) => state.edit.JSONScheme;

export default editSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import editSlice from './reducers/editSlice';

export const store = configureStore({
  reducer: {
    edit: editSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

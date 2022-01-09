import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './pages/mainPage';
import './virtual:windi.css';
import '@arco-design/web-react/dist/css/arco.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { EditorContextProvider } from './context/editorContext';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <EditorContextProvider>
        <MainPage />
      </EditorContextProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);

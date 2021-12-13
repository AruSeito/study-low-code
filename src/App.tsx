import './App.css';
import { CanvasContextProvider } from './context/canvasContext';
import EditorPage from './pages/editor';
import './virtual:windi.css';

function App() {
  return (
    <CanvasContextProvider>
      <EditorPage />
    </CanvasContextProvider>
  );
}

export default App;

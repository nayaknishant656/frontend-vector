import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import Header from './FronComponent/Header.jsx'

function App() {
  return (
    <div>
      <Header />
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>

  );
}

export default App;

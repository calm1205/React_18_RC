import { ThemeProvider } from 'src/Theme';
import Batch from 'src/components/batch/Batch';

const App = () => {
  return (
    <ThemeProvider>
      <h1>batching</h1>
      <Batch />
    </ThemeProvider>
  );
};

export default App;

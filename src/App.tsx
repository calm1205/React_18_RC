import { ThemeProvider } from 'src/Theme';
import { Button as OrgButton } from 'src/components/atoms';

const App = () => {
  return (
    <ThemeProvider>
      <OrgButton>original</OrgButton>
    </ThemeProvider>
  );
};

export default App;

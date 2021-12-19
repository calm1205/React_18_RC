import React from 'react';
import { ThemeProvider } from 'src/Theme';
import { Button as OrgButton } from 'src/components/atoms';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { pink } from '@mui/material/colors';

const App = () => {
  const [radio, setRadio] = React.useState(1);

  return (
    <ThemeProvider>
      <OrgButton>original</OrgButton>
      <Button variant="contained" color="primary">
        MUI primary
      </Button>
      <Button variant="contained" color="error">
        MUI error
      </Button>
      <Button variant="contained" color="info">
        MUI info
      </Button>
      <Button variant="contained" color="inherit">
        MUI inherit
      </Button>
      <Button variant="contained" color="secondary">
        MUI secondary
      </Button>
      <Button variant="contained" color="success">
        MUI success
      </Button>
      <Button variant="contained" color="warning">
        MUI warning
      </Button>
      <RadioGroup row name="radios">
        <Radio
          checked={radio === 1}
          name="radio"
          value={1}
          onChange={(e) => setRadio(Number(e.target.value))}
        />
        <Radio
          checked={radio === 2}
          name="radio"
          value={2}
          color="default"
          onChange={(e) => setRadio(Number(e.target.value))}
        />
        <Radio
          checked={radio === 3}
          name="radio"
          value={3}
          color="error"
          sx={{ color: pink[800] }}
          onChange={(e) => setRadio(Number(e.target.value))}
        />
      </RadioGroup>
    </ThemeProvider>
  );
};

export default App;

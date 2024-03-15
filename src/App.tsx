import './global.scss';
import { Stack as MuiStack, ThemeProvider, styled } from '@mui/material';
import Page from './Page';
import { THEME } from './utils/theme';

const Stack = styled(MuiStack)(({ theme }) => ({
  [theme.breakpoints.down(`md`)]: {
    alignItem: `normal`,
    justifyContet: `normal`,
    padding: `16px`,
    height: `auto`,
  },
}));

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ height: `100vh` }}
      >
        <Page />
      </Stack>
    </ThemeProvider>
  );
}

export default App;

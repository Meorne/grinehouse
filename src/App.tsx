import { Box, Grid } from '@mui/material';
import './App.scss';
import { ReactComponent as Grineouille } from './assets/grinouillelogo.svg';

const App = () => {
  return (
    <Box
      sx={{ flexGrow: 1, width: 1024, margin: `0 auto` }}
      alignItems="center"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Grineouille />
        </Grid>
        <Grid item xs={12} md={8}>
          <Grineouille />
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;

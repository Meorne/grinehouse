import { Box, Grid, Paper } from '@mui/material';
import './App.scss';
import { ReactComponent as Grineouille } from './assets/grinouillelogo.svg';

import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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

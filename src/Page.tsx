import { Grid, Stack } from '@mui/material';
import { ReactComponent as Grineouille } from './assets/grinouillelogo.svg';
import { ReactComponent as Grinehouse } from './assets/grinehouselogo.svg';
import Links from './Links';
import Infos from './Infos';
import Footer from './Footer';

const Page = () => (
  <Stack
    direction="column"
    justifyContent="center"
    alignItems="center"
    sx={{
      maxWidth: 1024,
      width: `100%`,
    }}
  >
    <Grid container spacing={2}>
      <Grid xs={0} md={3} />
      <Grid item xs={12} md={6}>
        <Grinehouse />
      </Grid>
      <Grid xs={0} md={3} />
      <Grid xs={0} md={4} />
      <Grid item xs={12} md={4}>
        <Grineouille />
      </Grid>
      <Grid item xs={12} md={4}>
        <Infos />
      </Grid>
      <Links />
      <Footer />
    </Grid>
  </Stack>
);

export default Page;

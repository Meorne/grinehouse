import { Grid, Typography } from '@mui/material';

const Footer = () => (
  <Grid container marginTop={2}>
    <Grid item xs={0} md={2} />
    <Grid item xs={12} md={8} textAlign="center" marginBottom={1}>
      <Typography fontSize={18}>
        Envie de prendre contact avec moi pour un devis ou un recrutement ?
      </Typography>
    </Grid>
    <Grid item xs={0} md={2} />
    <Grid item xs={0} md={4} />
    <Grid item xs={12} md={4} textAlign="center">
      <Typography className="typo-bg-black typo-color-white" fontSize={22}>
        nicolas@grinehouse.fr
      </Typography>
    </Grid>
    <Grid item xs={0} md={4} />
  </Grid>
);

export default Footer;

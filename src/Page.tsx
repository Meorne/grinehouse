import { Box, Grid, IconButton, Stack, Typography } from '@mui/material';
import { ReactComponent as Grineouille } from './assets/grinouillelogo.svg';
import { ReactComponent as Grinehouse } from './assets/grinehouselogo.svg';
import { ReactComponent as CvIcon } from './assets/cvicon.svg';
import { ReactComponent as BehanceIcon } from './assets/behanceicon.svg';
import { ReactComponent as LinkdnIcon } from './assets/linkdnicon.svg';
import { ReactComponent as MailIcon } from './assets/mailicon.svg';

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
        <Box>
          <Typography variant="h4" fontSize={40} fontWeight="bold">
            GRAPHIST FREE
          </Typography>
        </Box>
        <Box>
          <Typography className="typo-bg-black typo-color-white" fontSize={18}>
            Recherche Recrutement
          </Typography>
        </Box>
        <Box>
          <Typography className="typo-bg-black typo-color-green" fontSize={14}>
            Clermont-Ferrant(63)
          </Typography>
        </Box>
        <Box marginTop={1}>
          <Typography>Création graphique</Typography>
        </Box>
        <Box>
          <Typography>Soft Animation</Typography>
        </Box>
        <Box>
          <Typography>Print-Web</Typography>
        </Box>
        <Box>
          <Typography>Création Signaletique</Typography>
        </Box>
        <Box>
          <Typography>Soft animation</Typography>
        </Box>
        <Box>
          <Typography>Com RS</Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={4} />
      <Grid item xs={3} md={1}>
        <IconButton>
          <CvIcon style={{ width: `100%` }} />
        </IconButton>
      </Grid>
      <Grid item xs={3} md={1}>
        <IconButton>
          <BehanceIcon style={{ width: `100%` }} />
        </IconButton>
      </Grid>
      <Grid item xs={3} md={1}>
        <IconButton>
          <LinkdnIcon style={{ width: `100%` }} />
        </IconButton>
      </Grid>
      <Grid item xs={3} md={1}>
        <IconButton>
          <MailIcon style={{ width: `100%` }} />
        </IconButton>
      </Grid>
      <Grid xs={0} md={4} />
    </Grid>
  </Stack>
);

export default Page;

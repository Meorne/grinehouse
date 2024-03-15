import { Box, Typography } from '@mui/material';

const Infos = () => (
  <>
    <Box>
      <Typography variant="h4" fontSize={40} fontWeight="bold">
        GRAPHISTE FREE
      </Typography>
    </Box>
    <Box>
      <Typography className="typo-bg-black typo-color-white" fontSize={18}>
        Recherche Recrutement
      </Typography>
    </Box>
    <Box>
      <Typography className="typo-bg-black typo-color-green" fontSize={14}>
        Clermont-Ferrand(63)
      </Typography>
    </Box>
    <Box marginTop={1}>
      <Typography>Création graphique PRINT/WEB</Typography>
    </Box>
    <Box>
      <Typography>Création logotype</Typography>
    </Box>
    <Box>
      <Typography>Soft animation</Typography>
    </Box>
    <Box>
      <Typography>Communication RS</Typography>
    </Box>
  </>
);

export default Infos;

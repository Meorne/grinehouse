import { createTheme } from '@mui/material';
import { OverridesStyleRules } from '@mui/material/styles/overrides';

const mainTheme = () => {
  const fontColors = { white: `#fff`, green: `#9EF5A6` };
  const fontColorClasses: OverridesStyleRules = {};

  Object.entries(fontColors).forEach(([key, value]) => {
    fontColorClasses[`&.typo-color-${key}`] = { color: value };
  });

  return createTheme({
    typography: {
      fontFamily: `"Poppins", sans-serif`,
      fontSize: 20,
      fontWeightRegular: 400,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1024,
        lg: 1200,
        xl: 1536,
      },
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            display: `inline-block`,
            lineHeight: 1.3,
            whiteSpace: `break-spaces`,

            '&.typo-bg-black': {
              fontWeight: `bold`,
              backgroundColor: `#000`,
              padding: `0 8px`,
            },
            ...fontColorClasses,
          },
        },
      },
    },
  });
};

export const THEME = mainTheme();

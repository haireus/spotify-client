// material core
import { createTheme } from '@mui/material/styles';

import light from './light';
import dark from './dark';
import typography from './typography';

const typeTheme = [light, dark];

const themes = (type: number) =>
  createTheme({
    ...typeTheme[type],
    typography: { ...typography },
  });

export default themes;

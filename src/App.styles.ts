import { createTheme } from '@mui/material/styles';

const AppStyles = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        .bodyContainer {
          background-color: #0e1414;
          color: #bfc1c1;
          height: 100vh;
        }
        .component1Container{
            padding: 150px 0px;
        }
        `,
    },
  },
});

export default AppStyles;

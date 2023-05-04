import { createTheme } from '@mui/material/styles';
import appTypography from './AppTypography';

const AppStyles = createTheme({
  typography: appTypography,
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html,
        body {
            background-color: #0e1414;
            color: #bfc1c1;
            height: 100vh;
        }

        .bodyContainer {
            padding: 150px 0px;
        }
        .component1Container{
            max-width: 1210px;
            margin: 0 auto;
        }
        .heading3 {
            font-size: 26px !important;
            font-weight: 200 !important;
            position: relative;
            padding-bottom: 25px;
        }

        .heading3:after {
            content: " ";
            display: block;
            position: absolute;
            height: 1px;
            background: #fff;
            top: 50px;
            left: 0;
            width: 100%;
        }

        .heading3, .heading6 {
            text-transform: uppercase;
        }

        .heading6 {
            color: #cf1430;
            font-size: 16px !important;
        }

        .component1-element1 {
            padding-bottom: 35px;
            line-height: 1.5;
            font-size: 18px;
            letter-spacing: 1px;
        }

        .component2-element2 {
            font-weight: 600 !important;   
            line-height: 1.5; 
            letter-spacing: 1px;
            font-size: 18px;
        }
        `,
    },
  },
});

export default AppStyles;

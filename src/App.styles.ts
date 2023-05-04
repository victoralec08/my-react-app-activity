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
            color: #fff;
            height: 100vh;
        }

        .bodyContainer {
            padding: 150px 0px;
        }

        .index-containter{
            max-width: 1210px;
            margin: 0 auto;
        }

        .component1-container {
            margin-bottom: 240px;
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

        .heading2, .heading3, .heading6 {
            text-transform: uppercase;
            font-weight: 300;
        }

        .heading6 {
            color: #cf1430;
            font-size: 16px !important;
        }

        .heading2 {
            text-align: center;
            font-size: 43px;
            color: #fff;
        }

        .component1-element1 {
            padding-bottom: 35px;
            line-height: 1.5;
            font-size: 18px;
            letter-spacing: 1px;
            color: #dfe0e0 !important;
        }

        .component2-element2 {
            font-weight: 600 !important;   
            line-height: 1.5; 
            letter-spacing: 1px;
            font-size: 18px;
        }

        .card-component {
            border-radius: 0px !important;
            background: transparent !important;
            color: #fff !important;
            box-shadow: none !important;
        }

        .card-component-content-media {
            border-bottom: 5px solid #cf1430;
        }

        .card-component-content{
            padding: 20px 0px 0px 0px !important;
            color: #b2b3b3 !important;
        }
        
        .card-component-content-title{
            font-size: 18px !important;
            color: #fff !important;
            margin-bottom: 12px !important;
        }

        .card-component-content-description{
            color: #b2b3b3 !important;
            font-size: 16px !important;
            line-height: 1.75 !important;
        }

        .card-component-action {
            padding: 8px 0px !important;
        }

        .card-component-action > div {
            cursor: pointer !important;
            color: #fff;
            font-weight: 400;
            -webkit-user-select: none; /* Safari */
            -ms-user-select: none; /* IE 10 and IE 11 */
            user-select: none; /* Standard syntax */
            transition: 0.5s ease;
        }

        .card-component-action > div:hover {
            transform: scale(1.1);
            padding-left: 8px;
          }


        .card-component-action > div > span {
            padding-bottom: 10px;
            border-bottom: 1px solid #cf1430;
            line-height: 48px;
        }

        .shrink img {
            transition: .75s ease;
        }
            
        .shrink img:hover{
        -webkit-transform: scale(0.9);
        -ms-transform: scale(0.9);
        transform: scale(0.9);
        transition: 0.5s ease;
        }
        `,
    },
  },
});

export default AppStyles;

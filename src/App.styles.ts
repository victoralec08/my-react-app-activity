import { createTheme } from '@mui/material/styles';
import appTypography from './AppTypography';

const AppStyles = createTheme({
  typography: appTypography,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'html, body': {
          backgroundColor: '#0e1414',
          color: '#fff',
          height: '100vh',
        },

        '.bodyContainer': {
          padding: '150px 0px',
        },

        '.indexContainer': {
          maxWidth: '1210px',
          margin: '0 auto',
        },

        '.component1Container': {
          marginBottom: '240px',
        },

        '.heading3': {
          fontSize: '26px !important',
          fontWeight: '200 !important',
          position: 'relative',
          paddingBottom: '10px',
          borderBottom: '1px solid #fff',
          marginBottom: '30px !important',
        },

        '.heading2, .heading3, .heading6': {
          textTransform: 'uppercase',
          fontWeight: '300',
        },

        '.heading6': {
          color: '#cf1430',
          fontSize: '16px !important',
        },

        '.heading2': {
          textAlign: 'center',
          fontSize: '43px',
          color: '#fff',
        },

        '.component1Element1': {
          paddingBottom: '35px',
          lineHeight: '1.5',
          fontSize: '18px',
          letterSpacing: '1px',
          color: '#dfe0e0 !important',
        },

        '.component2Element2': {
          fontWeight: '600 !important',
          lineHeight: '1.5',
          letterSpacing: '1px',
          fontSize: '18px',
        },

        '.cardComponent': {
          borderRadius: '0px !important',
          background: 'transparent !important',
          color: '#fff !important',
          boxShadow: 'none !important',
        },

        '.cardComponentContentMedia': {
          borderBottom: '5px solid #cf1430',
        },

        '.cardComponentContent': {
          padding: '20px 0px 0px 0px !important',
          color: '#b2b3b3 !important',
        },

        '.cardComponentContentTitle': {
          fontSize: '18px !important',
          color: '#fff !important',
          marginBottom: '12px !important',
        },

        '.cardComponentContentDescription': {
          color: '#b2b3b3 !important',
          fontSize: '16px !important',
          lineHeight: '1.75 !important',
        },

        '.cardComponentAction': {
          padding: '8px 0px !important',

          '& > div': {
            cursor: 'pointer !important',
            color: '#fff',
            fontWeight: 400,
            webkitUserSelect: 'none' /* Safari */,
            msUserSelect: 'none' /* IE 10 and IE 11 */,
            userSelect: 'none' /* Standard syntax */,
            transition: '0.5s ease',

            '&:hover': {
              transform: 'scale(1.1)',
              paddingLeft: '8px',
            },

            '& > span': {
              paddingBottom: '10px',
              borderBottom: '1px solid #cf1430',
              lineHeight: '48px',
            },
          },
        },

        '.shrink img': {
          transition: '.75s ease',

          '&:hover': {
            webkitTransform: 'scale(0.9)',
            msTransform: 'scale(0.9)',
            transform: 'scale(0.9)',
            transition: '0.5s ease',
          },
        },

        '.dialogContent': {
          background: '#0e1414 !important',
          color: '#fff !important',
        },

        '@media (max-width: 992px)': {
          '.indexContainer': {
            maxWidth: '768px',
          },

          '.component1Container': {
            marginBottom: '140px',
          },
        },

        '@media (max-width: 768px)': {
          '.indexContainer': {
            maxWidth: '600px',
          },

          '.component1Container': {
            marginBottom: '100px',
          },

          '.heading2': {
            fontSize: '38px',
          },
        },

        '@media (max-width: 600px)': {
          '.indexContainer': {
            maxWidth: '420px',
          },
        },

        '@media (max-width: 420px)': {
          '.indexContainer': {
            maxWidth: '280px',
          },

          '.shrink img': {
            width: '280px',
            height: 'auto',
          },
        },
      },
    },
  },
});

export default AppStyles;

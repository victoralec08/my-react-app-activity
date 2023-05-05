import { Box, Grid } from '@mui/material';
import Image1 from '../../../assets/component-02/Image-01.jpg';
import Image2 from '../../../assets/component-02/Image-02.jpg';
import Image3 from '../../../assets/component-02/Image-03.jpg';
import CardComponent from './CardComponent/CardComponent';

const Component1 = () => {
  const readMore = {
    label: 'READ MORE',
    onClick: () => console.log('Read more'),
  };
  return (
    <Box className="component2Container">
      <Box component="h2" className="heading2">
        All the latest from AEG
      </Box>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6} xl={4}>
          <CardComponent
            imageAlt="image-1"
            image={Image1}
            title="Summer Lunch Menu By Mark Best"
            description="AEG ambassador Mark&#39;s Bests summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home."
            readMore={readMore}
          />
        </Grid>
        <Grid item sm={12} md={6} xl={4}>
          <CardComponent
            imageAlt="image-2"
            image={Image2}
            title="A Traditional Christmas Eve, Mark Best Style"
            description="One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.
            "
            readMore={readMore}
          />
        </Grid>
        <Grid item sm={12} md={6} xl={4}>
          <CardComponent
            imageAlt="image-3"
            image={Image3}
            title="Taking Taste Further"
            description="This exclusive cookbook gives you all the know-how you need. We&#39;ve designed it to make sure you get the most out of our products - and the best out of your
            food.
            "
            readMore={readMore}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Component1;

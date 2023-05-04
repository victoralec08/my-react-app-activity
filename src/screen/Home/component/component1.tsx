import { Box, Grid, Typography } from '@mui/material';
import Image1 from '../../../assets/component-01/Image-01.jpg';
import Image2 from '../../../assets/component-01/Image-02.jpg';
import Image3 from '../../../assets/component-01/Image-03.jpg';

const Component1 = () => (
  <Box className="component1-container">
    <Grid container spacing={2} justifyContent="center" justifyItems="center" alignItems="center" alignContent="center">
      <Grid item xl={4}>
        <img src={Image1} />
      </Grid>
      <Grid item xl={4}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          justifyItems="center"
          alignItems="center"
          alignContent="center"
        >
          <Grid item xl={12}>
            <img src={Image2} />
          </Grid>
          <Grid item xl={12}>
            <img src={Image3} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xl={4}>
        <Typography component="h3" className="heading3">
          Answer your body's needs
        </Typography>
        <Box component="p" className="component1-element1">
          The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body
          naturally develops an appetite for the foods and nutrients it needs to be healthy, but that artificial
          flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being
          mindful as your appetite guides you to consume according to your body's needs.
        </Box>
        <Box>
          <Typography component="h6" className="heading6">
            Be mindful
          </Typography>
          <Box component="p" className="component2-element2">
            Sourcing local or organic food is a good way to start being more mindful about what you're cooking and
            eating.
          </Box>
        </Box>
      </Grid>
    </Grid>
  </Box>
);

export default Component1;

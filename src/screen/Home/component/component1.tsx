import { Grid } from '@mui/material';
import Image1 from '../../../assets/component-01/Image-01.jpg';
import Image2 from '../../../assets/component-01/Image-02.jpg';
import Image3 from '../../../assets/component-01/Image-03.jpg';

const Component1 = () => (
  <Grid container justifyContent="center">
    <Grid item md={12} xl={9}>
      <Grid container>
        <Grid item md={12} xl={6} alignSelf="center" alignContent="center">
          <img src={Image1} />
        </Grid>
        <Grid item md={12} xl={6}>
          <Grid container spacing={2}>
            <Grid item xl={12}>
              <img src={Image2} />
            </Grid>
            <Grid item xl={12}>
              <img src={Image3} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Grid md={12} xl={3}>
      Item 2
    </Grid>
  </Grid>
);

export default Component1;

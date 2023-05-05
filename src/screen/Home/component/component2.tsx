import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from '@mui/material';
import Image1 from '../../../assets/component-02/Image-01.jpg';
import Image2 from '../../../assets/component-02/Image-02.jpg';
import Image3 from '../../../assets/component-02/Image-03.jpg';
import CardComponent from './CardComponent/CardComponent';

const Component1 = () => {
  const [open, setOpen] = useState(false);
  const readMore = {
    label: 'READ MORE',
    onClick: () => {
      setOpen(true);
      console.log('Read more');
    },
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="dialogContent">Lorem ipsum dolor sit amet</DialogTitle>
        <DialogContent className="dialogContent">
          <DialogContentText className="dialogContent">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
            ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
            nulla pariatur?
          </DialogContentText>
        </DialogContent>
        <DialogActions className="dialogContent">
          <Button onClick={handleClose} color="inherit">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Component1;

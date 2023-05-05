import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, CardActions } from '@mui/material';

interface ReadMoreEvent {
  label: string;
  onClick: () => void;
}

interface CardComponentProps {
  imageAlt?: string | undefined;
  image: string;
  title: string;
  description: string;
  readMore: ReadMoreEvent;
}

const CardComponent = (props: CardComponentProps) => {
  const { imageAlt, image, title, description, readMore } = props;
  return (
    <Card raised={false} className="cardComponent">
      <CardActionArea>
        <CardMedia component="img" image={image} alt={imageAlt ?? ''} className="cardComponentContentMedia" />
        <CardContent className="cardComponentContent">
          <Typography gutterBottom variant="h5" className="cardComponentContentTitle" component="div">
            {title}
          </Typography>
          <Typography variant="body2" className="cardComponentContentDescription">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="cardComponentAction">
        <Box onClick={() => readMore.onClick()}>
          <Box component="span">{readMore.label}</Box>
        </Box>
      </CardActions>
    </Card>
  );
};

export default CardComponent;

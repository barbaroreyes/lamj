import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImageCard(props) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        
        height="140"
        image="https://lamjce9b1a58db81496d90b0f125b07c8929185751-dev.s3.amazonaws.com/public/Agollas.jpeg"
        alt="aretes"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Aretes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
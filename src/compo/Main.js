import * as React from 'react';
import {AppBar,Collapse,IconButton,Toolbar} from '@mui/material'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'transparent',
    color: (props) => props.color,
  },godawn:{
      color:'gold',
      fontSize: '3rem',
    
  }
});

export default function MyComponent(props) {
  const classes = useStyles(props);
  return <main className={classes.root} >
      <Collapse in={true}>
      <h1 className='name'>
        La Mango <span>Jewellery</span>
    </h1>
    <IconButton className={classes.button}>
        <HomeOutlinedIcon className={classes.godawn}/>
    
    </IconButton>
      </Collapse>
    
  </main>;
}
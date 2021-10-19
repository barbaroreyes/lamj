import * as React from 'react';
import {AppBar,Collapse,IconButton,Toolbar} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
    <h1 className='name'>
        La Mango <span>Jewellery</span>
    </h1>
    <IconButton className={classes.button}>
        <ExpandMoreIcon className={classes.godawn}/>
    </IconButton>
  </main>;
}
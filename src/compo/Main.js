import  React ,{useState,useEffect}from 'react';
import {AppBar,Collapse,IconButton,Toolbar} from '@mui/material'
import Nav from '../compo/AppBar'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'transparent',
    color: (props) => props.color,
  },godawn:{
      color:'gold',
      
    
  }
});

export default function MyComponent(props) {
  const classes = useStyles(props);
  const [checked ,setChecked] = useState(false)
  useEffect(() => {
      setChecked(true)
  },[])
  return <main className={classes.root} >
      <Collapse 
      in={checked}
      {...(checked ? {timeout:3050}:{})}
      >
      <h1 className='name'>
        La Mango <span>Jewellery</span>
    </h1>
    <IconButton>
       <Nav/>
    </IconButton>
      </Collapse>
    
  </main>;
}
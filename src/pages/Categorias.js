import  React ,{useState,useEffect}from 'react';
import {AppBar,Collapse,IconButton,Toolbar} from '@mui/material'
// import Box from '@mui/material/Box';
import ImageCard from '../compo/IMageCard'
import Nav from '../compo/AppBar'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: (props) => props.color,
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
      ><IconButton>
       <Nav/>
    </IconButton>
    categorias 
      <ImageCard/>
      </Collapse>
    
  </main>;
}
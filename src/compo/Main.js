import  React ,{useState,useEffect}from 'react';
import {AppBar,Collapse,IconButton,Toolbar} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'transparent',
    color: (props) => props.color,
  },godawn:{
      color:'gold',
      fontSize: '4rem',
    
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
      {...(checked ? {timeout:1000}:{})}
      >
      <h1 className='name'>
        La Mango <span>Jewellery</span>
    </h1>
    <IconButton>
        <MenuIcon className={classes.godawn}/>
    
    </IconButton>
      </Collapse>
    
  </main>;
}
import  React ,{useState,useEffect}from 'react';
import {AppBar,Collapse,IconButton,Toolbar} from '@mui/material'
// import Box from '@mui/material/Box';
import ImageCard from '../compo/IMageCard'
import Nav from '../compo/AppBar';
import Categoria from '../compo/Categoria'
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

export default function MyComponent({jollas}) {
  console.log(jollas,'in imageCard')
  const classes = useStyles();
  const [checked ,setChecked] = useState(false)
  const [categ ,setCategoria] = useState([])
  useEffect(() => {
      setChecked(true)
  },[])
    const filtereCat = [...new Set(jollas.map((item,i => {
      return (
         <></>
      )
    }))]
   
  return (<main className={classes.root} >
           
     
      {/* <Collapse 
      in={checked}
      {...(checked ? {timeout:1000}:{})}
      ><IconButton>
       <Nav/>
    </IconButton> */}
       <h1>Categorias</h1>
       <div className='categoria'>
       {filtereCat}
       </div>
       

      

   

      
      {/* </Collapse> */}
    
  </main>)
}
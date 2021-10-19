import * as React from 'react';
import Header from '../compo/Header';
import Main from '../compo/Main';
import Ofertas from '../compo/Ofertas';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'transparent',
    color: (props) => props.color,
  },
});

export default function MyComponent(props) {
  const classes = useStyles(props);
  return <div className={classes.root} >
     <Header/>
     <Main {...props}/>
     {/* <Ofertas/> */}
  </div>;
}

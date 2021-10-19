import * as React from 'react';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'transparent',
    color: (props) => props.color,
  },
});

export default function Ofertas(props) {
  const classes = useStyles(props);
  return <footer className={classes.root} >
     footer
  </footer>;
}
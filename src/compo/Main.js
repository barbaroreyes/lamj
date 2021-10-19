import * as React from 'react';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'transparent',
    color: (props) => props.color,
  },
});

export default function MyComponent(props) {
  const classes = useStyles(props);
  return <main className={classes.root} >
    <h1 className='name'>La Mango Jewellery</h1>
  </main>;
}
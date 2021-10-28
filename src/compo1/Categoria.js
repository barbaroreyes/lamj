import React ,{useState,useEffect}from 'react';
import {Link}from 'react-router-dom'
import {API,graphqlOperation} from 'aws-amplify'
import {listPrendas} from '../graphql/queries'
const Categoria = (props) => {
  const [prend,setPred] = useState([])

  console.log('jollas in categorie',props)

  return (
    <div className='categoria-box'>
      
      <Link to='/group'>{props.name}</Link>
      
    </div>
  );
}

export default Categoria;

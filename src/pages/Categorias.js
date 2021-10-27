import React,{useState,useEffect} from 'react';
import {API,graphqlOperation} from 'aws-amplify'
import {listCates} from '../graphql/queries'
import Categoria from '../compo/Categoria'


const Categorias = ({jollas}) => {
  console.log('jollas in categorias',jollas)
const [cate,setCate] = useState([])

useEffect(() => {
  fetchCate()
},[])
const fetchCate = async () =>{
  try {
    const cateData = await API.graphql(graphqlOperation(listCates))
    const lisCate = cateData.data.listCates.items;
    setCate(lisCate)
    console.log('listCates',lisCate)

    
  } catch (error) {
    
  }
}



  return (
    <div className="categoria">
      {/* <p className='nam'>Categorias</p> */}
      {
        cate.map((item,i)=>{
          return (
            < Categoria
            {...item}
            {...jollas}
            />
          )
        })
      }
      
    </div>
  );
}

export default Categorias;

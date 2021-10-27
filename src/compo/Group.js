import React,{useState,useEffect} from 'react';

const Group = (props) => {
    console.log('props en group',props.jollas)
    const [pren,setPrend] = useState([]);
    
useEffect(() => {
  filtered()
},[])
    const filtered  = () => {
  const fusdb = props.jollas.filter(item => item.categoria ==='Aretes')
    console.log(fusdb, 'fusdb on filter')
    setPrend(fusdb)
    }

    console.log('pren',pren)
  return (
    <div className="group">
     group
    </div>
  );
}

export default Group;

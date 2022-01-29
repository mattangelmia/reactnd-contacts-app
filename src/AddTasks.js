import React from 'react';

export default function Tasks(props) {
  return <div>
     <input type="text" placeholder='Add Tasks' onChange={(e)=>props.updateQuery(e)}/>
     <input type="submit" onClick={()=>props.addTask()} value={props.query} />
  </div>;
}

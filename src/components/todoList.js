import React from "react";
//  import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const TodoList=({text,removeContact,id})=>{
    
    return(
        <>
        <div className="todo_style" >     

      <span  onClick={()=>
        removeContact(id)
      }><i className="fa fa-times" aria-hidden="true"></i></span>
        {/* <HighlightOffIcon/> */}
       <li>{text}</li>
       </div>
       </>
    )



}
export default TodoList;
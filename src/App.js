import React, { useState } from "react";
import TodoList from "./components/todoList";


const App=()=>{
    const[todo,setTodo]=useState("");
    const[data,setData]=useState([]);

    const changeTodo=(e)=>{
       setTodo(e.target.value);
       console.log("");
    }
    const changeHandler=(e)=>{
        e.preventDefault();
        console.log("");

        setData((oldData)=>{
        const updatedList=[...oldData,todo];
        console.log(updatedList);
            return updatedList; 
         
        });
       

        setTodo(""); 


    }
   const removeContact=(id)=>{
    setData((oldData)=>{
      return oldData.filter((elem,i)=>{
        return i !==id; 

      })
    })
   } 
     
     
 
    return(
      <React.Fragment>
        <div className="main_style">
            <div className="center_style">   

        <br/>
        <h1 className="heading_style" >The Todo List</h1>
        <br/>
      
         <input  type="text" placeholder="Add Task" value={todo} onChange={changeTodo}/>   
        <button className="button" onClick={changeHandler}>+</button>

     <ol>
        {
            data.map((item,i)=>{
             return <TodoList
              key={i} 
              id={i} 
              text={item} 
              removeContact={removeContact}/>      
            
        })
        }
     
        

    </ol> 

     
    
        </div>
     
        
        </div>
       
       
      
        
       </React.Fragment>
    )
      }
export default App;

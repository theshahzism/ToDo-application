import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";

function App() {

  const [todoItems,setTodoItems]=useState([]);

  const handleNewItem=(itemName,itemDueDate)=>{
    const newTodoItems=[...todoItems,{ name:itemName,dueDate:itemDueDate},]
    setTodoItems(newTodoItems);

  }

  const handleDeleteItem=(todoItemName)=>{
    console.log(todoItemName)
    const newTodoItems=todoItems.filter(item=>item.name!==todoItemName);
    setTodoItems(newTodoItems);
  }
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length===0 && <WelcomeMessage></WelcomeMessage> }
      <TodoItems toDoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  );
}
export default App;

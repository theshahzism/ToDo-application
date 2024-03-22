import TodoItem from "./TodoItem";

function TodoItems({ toDoItems, onDeleteClick }) {
  return (
    <div className="item-container">
      {toDoItems.map((item) => (
        <TodoItem
          TodoName={item.name}
          TodoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
}
export default TodoItems;

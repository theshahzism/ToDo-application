import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddButton = () => {
    onNewItem(todoName,todoDate);
    setTodoName("");
    setTodoDate("");
  };
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            onChange={handleNameChange} value={todoName}
          />
        </div>

        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={todoDate} />
        </div>

        <div className="col-2">
          <button
            type="button"
            className="btn my-button btn-success"
            onClick={handleAddButton}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;

function TodoItem({ TodoName, TodoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">{TodoName}</div>

        <div className="col-4">{TodoDate}</div>
 
        <div className="col-2">
          <button
            type="button"
            className="btn my-button btn-danger"
            onClick={() => onDeleteClick(TodoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;

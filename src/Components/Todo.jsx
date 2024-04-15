import PropTypes from "prop-types";

const Todo = ({ id, text, completed, onDelete, onComplete }) => {
  return (
    <div className="todolist" >
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {text}
      </span>
     <div className="buttonSetion ">
     <button  className="deleteButton" onClick={() => onDelete(id)}>
        <span className="material-symbols-outlined">delete</span>
      </button>
      <button className="completeButton" onClick={() => onComplete(id)}>
        <span className="material-symbols-outlined">done</span>
      </button>
     </div>
    </div>
  );
};

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default Todo;

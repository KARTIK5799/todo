import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Todo from './Todo';
import { deleteTodo, completeTodo } from '../actions';

const TodoList = ({ todos, onDelete, onComplete }) => {
  return (
    <div className='todolists'>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  onDelete: deleteTodo,
  onComplete: completeTodo,
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

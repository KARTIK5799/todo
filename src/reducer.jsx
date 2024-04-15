import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from './actions';

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || [],
};

const todoReducer = (state = initialState, action) => {
  let newTodos, filteredTodos, updatedTodos;
  switch (action.type) {
    case ADD_TODO:
      newTodos = [...state.todos, { id: Date.now(), text: action.payload.text, completed: false }];
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return {
        ...state,
        todos: newTodos,
      };
    case DELETE_TODO:
      filteredTodos = state.todos.filter(todo => todo.id !== action.payload.id);
      localStorage.setItem('todos', JSON.stringify(filteredTodos));
      return {
        ...state,
        todos: filteredTodos,
      };
    case COMPLETE_TODO:
      updatedTodos = state.todos.map(todo =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return {
        ...state,
        todos: updatedTodos,
      };
    default:
      return state;
  }
};

export default todoReducer;

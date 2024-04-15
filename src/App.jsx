import TodoList from './Components/TodoList';
import AddTodo from './Components/AddTodo';
import './App.css'

const App = () => {
  return (
    <div className='container' >
      <h1>Redux Todo App</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;

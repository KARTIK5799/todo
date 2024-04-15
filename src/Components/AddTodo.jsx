import PropTypes from 'prop-types';
import{ useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim() !== '') {
      onAdd(text);
      setText('');
    }
  };

  return (
    <div className='inputBox'>
      <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder='Add Your Task' />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
};

AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onAdd: addTodo,
};

export default connect(null, mapDispatchToProps)(AddTodo);

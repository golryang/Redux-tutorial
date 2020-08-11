import React from 'react';
import { MdRemoveCircleOutline } from 'react-icons/md';
import { MdAdd } from 'react-icons/md';
import './Todos.scss';

// 투두 아이템, todoitem
const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div className="TodoListItem">
      <input
        type="checkbox"
        className="TodoCheckBox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      />
      <span
        style={{
          textDecoration: todo.done ? 'line-through' : 'none',
          opacity: todo.done ? 0.7 : 1,
        }}
      >
        {todo.text}
      </span>

      <div className="remove" onClick={() => onRemove(todo.id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput('');
  };

  // Todos 객체에 Props를 받아옴,

  const onChange = (e) => onChangeInput(e.target.value);
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <form className="TodoInsert" onSubmit={onSubmit}>
        <input
          value={input}
          onChange={onChange}
          placeholder="할 일을 입력하세요!"
        />
        <button type="submit">
          <MdAdd />
        </button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;

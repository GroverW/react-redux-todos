import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function TodoList() {
  const todoList = useSelector(store => store.todos);
  const dispatch = useDispatch();

  const removeTodo = id => {
    dispatch({ type: "REMOVE_TODO", payload: { id } });
  }

  const handleCompletion = id => {
    dispatch({ type: "TOGGLE_COMPLETION", payload: { id } });
  }



  return (
    <div className="TodoList">
      <ul>
        {todoList.map(todo =>
          <li style={{ textDecoration: todo.complete ? "line-through" : "none" }}
            key={todo.id}>
            {todo.description}
            <button onClick={() => handleCompletion(todo.id)}>{todo.complete ? "✗" : "✓"}</button>
            <button onClick={() => removeTodo(todo.id)}>remove PERMANENTLY</button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default TodoList;
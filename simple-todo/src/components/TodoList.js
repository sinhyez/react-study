import React from "react";
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggle, remove }) => {
  return (
    <div className="todolist">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} toggle={toggle} remove={remove} />
      ))}
    </div>
  );
};

export default TodoList;

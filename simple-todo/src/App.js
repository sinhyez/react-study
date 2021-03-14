import React, { useState, useRef, useCallback } from "react";
import "./App.css";
import Template from "./components/Template";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";

function App() {
  const [todos, setTodos] = useState([]);

  const ref = useRef(1);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: ref.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      ref.current += 1;
    },
    [todos]
  );

  const toggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  const remove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  return (
    <Template>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} toggle={toggle} remove={remove} />
    </Template>
  );
}

export default App;

import React, { useState } from 'react';
import "./App.css";
import Template from "./components/Template";
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <Template>
      <TodoInsert />
      <TodoList todos={todos} />
    </Template>
  );
}

export default App;

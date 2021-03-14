import React, { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");

      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="todo-insert" onSubmit={onSubmit}>
      <input placeholder="Insert to Todo" value={value} onChange={onChange} />
      <button onSubmit={onSubmit}>
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;

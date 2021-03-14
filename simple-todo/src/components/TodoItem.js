import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";

const TodoItem = ({ todo, toggle, remove }) => {
  const { id, text, checked } = todo;
  return (
    <div className="todo-item">
      <div className="checkbox" onClick={()=>toggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="textbox">{text}</div>
      </div>
      <div className="removebox" onClick={()=>remove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoItem;

import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";

const TodoItem = ({ todo }) => {
  const { text, checked } = todo;
  return (
    <div className="todo-item">
      <div className="checkbox">
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="textbox">{text}</div>
      </div>
      <div className="removebox">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoItem;

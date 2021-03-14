import React from "react";

const Template = ({ children }) => {
  return (
    <div className="template">
      <div className="app-title">Todo List</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Template;

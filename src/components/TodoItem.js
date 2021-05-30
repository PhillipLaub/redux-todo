import React from "react";
import todoItem from "./todoItem.css";

const TodoItem = ({ name, done, id }) => {
  return (
    <div className="todoItem">
      <p className={done && "todoItem--done"}>{name}</p>
    </div>
  );
};

export default TodoItem;
import React from "react";

import TodoListItem from "../todo-list-item";

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li className="ant-list-item" key={id}>
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });
  return (
    <div className="ant-list ant-list-sm ant-list-split ant-list-bordered todo-list">
      <ul className="ant-list-items">
        {elements.length === 0 ? <li className="ant-list-item"><strong className="blue">Sorry, nothing found</strong></li> : elements}
      </ul>
    </div>
  );
};

export default TodoList;

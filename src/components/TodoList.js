import React, { useState } from "react";
import Todo from "./Todo";
function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <Todo
              todos={todos}
              setTodos={setTodos}
              text={todo.text}
              todo={todo}
              key={todo.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;

import React from "react";

function Todo({ todos, todo, setTodos, text, key }) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <div className="todo">
        <li className={`todo-item ${todo.completed ? "completed" : ""} `}>
          {text}
        </li>
        <button className="complete-btn" onClick={completeHandler}>
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Todo;

import { useRef, useEffect, useState, useMemo, useCallback } from "react";
import Page from "./component/page";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Придбати продукти" },
    { id: 2, text: "Прибрати вдома" },
    { id: 3, text: "Зробити домашнє завдання" },
  ]);
  // Кешуємо функцію видалення завдання за допомогою `useCallback`
  const handleDeleteTodo = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => handleDeleteTodo(todo.id)}> Видалити</button>
        </li>
      ))}
    </ul>
  );
}

// export default App;

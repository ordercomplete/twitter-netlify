import { useEffect } from "react";

export function useWindowListener(eventType, listener) {
  useEffect(() => {
    window.addEventListener(eventType, listener);
    return () => {
      window.removeEventListener(eventType, listener);
    };
  }, [eventType, listener]);
}

// Цей файл містить визначення користувацького хука `useWindowListener`, який дозволяє легко додавати та видаляти слухачів подій на глобальному об'єкті `window` у функціональних компонентах React.

// Розглянемо кожну частину цього коду детально:

// 1. **Імпорт**:

// import { useEffect } from "react";

// Цей рядок імпортує хук `useEffect` з бібліотеки React. Цей хук використовується для виконання побічних ефектів у функціональних компонентах.

// 2. **Визначення хука `useWindowListener`**:

// export function useWindowListener(eventType, listener) {
//   // ...
// }

// Цей хук приймає два аргументи:
// - `eventType`: Тип події, яку потрібно відстежувати на глобальному об'єкті `window`.
// - `listener`: Функція, яка буде викликана при виникненні події.

// 3. **Використання `useEffect`**:

// useEffect(() => {
//   window.addEventListener(eventType, listener);
//   return () => {
//     window.removeEventListener(eventType, listener);
//   };
// }, [eventType, listener]);

// Всередині хука `useWindowListener` використовується `useEffect`. Цей хук виконує побічні ефекти, тобто дії, які виходять за межі звичайного рендерингу компонента.

// - У функції, передана в `useEffect`, додається слухач події `eventType` на глобальний об'єкт `window` за допомогою `window.addEventListener`.
// - Функція, яка повертається з `useEffect`, буде викликана під час очищення ефекту (коли компонент буде демонтований або залежності зміняться). Ця функція видаляє слухач події `eventType` з `window` за допомогою `window.removeEventListener`.
// - Масив залежностей `[eventType, listener]` вказує, що ефект повинен бути перевиконаний, якщо змінюються значення `eventType` або `listener`.

// Загалом, цей хук надає зручний спосіб додавати та видаляти слухачі подій на глобальному об'єкті `window` у функціональних компонентах React. Він може бути корисним, наприклад, для відстеження подій, таких як `resize` або `scroll`, які впливають на весь додаток.

// file request.js
export const REQUEST_ACTION_TYPE = {
  PROGRESS: "progress",
  SUCCESS: "success",
  ERROR: "error",
  RESET: "reset",
};

export const requestInitialState = { status: null, message: null, data: null };

export const requestReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_ACTION_TYPE.PROGRESS:
      return {
        ...state,
        status: action.type,
        // message: null,
        // data: null,
      };
    case REQUEST_ACTION_TYPE.SUCCESS:
      return {
        ...state,
        status: action.type,
        data: action.payload,
      };
    case REQUEST_ACTION_TYPE.ERROR:
      return { ...state, status: action.type, message: action.payload };

    case REQUEST_ACTION_TYPE.RESET:
      return { ...requestInitialState };

    default:
      return { ...state };
  }
};

// 1 REQUEST_ACTION_TYPE:
// Цей об'єкт є переліком типів дій, які можуть бути виконані в контексті запиту. Він служить для визначення, який вид дії виконується і дозволяє уникнути жорсткого кодування строкових значень в коді.

// PROGRESS: Вказує на те, що запит у стані виконання.
// SUCCESS: Вказує на успішне завершення запиту.
// ERROR: Вказує на помилку, яка сталася під час запиту.
// RESET: Використовується для скидання стану запиту до початкового.

// 2 requestInitialState:
// Цей об'єкт визначає початковий стан запиту.

// status: Початковий статус запиту (відсутній).
// message: Повідомлення помилки або інформаційне повідомлення (відсутнє).
// data: Дані, отримані внаслідок успішного запиту (відсутні).

// 3 requestReducer:
// Ця функція є редюсером, який використовується в useReducer для обробки стану запиту. Вона приймає два аргументи: поточний стан state і об'єкт action, який містить type (тип дії) і, можливо, payload.

// Якщо action.type дорівнює REQUEST_ACTION_TYPE.PROGRESS, функція повертає новий стан зі зміненим status на progress.
// Якщо action.type дорівнює REQUEST_ACTION_TYPE.SUCCESS, функція встановлює status на success і оновлює data з action.payload.
// Якщо action.type дорівнює REQUEST_ACTION_TYPE.ERROR, функція встановлює status на error і записує повідомлення про помилку в message з action.payload.
// Якщо action.type дорівнює REQUEST_ACTION_TYPE.RESET, функція повертає початковий стан requestInitialState.
// За замовчуванням, якщо жодна з умов не виконана, функція повертає поточний стан.
// Цей код забезпечує гнучкий підхід для обробки різних станів запиту в React-додатку, дозволяючи легко реагувати на зміни у стані запиту, як-от зміни в інтерфейсі користувача залежно від статусу запиту.

// file post-create.js
import { useReducer, memo, useCallback } from "react";
import "./index.css";
import FieldForm from "../../component/field-form";
import Grid from "../../component/grid";
import { Alert, Loader, LOAD_STATUS } from "../../component/load";
import {
  requestInitialState,
  requestReducer,
  REQUEST_ACTION_TYPE,
} from "../../util/request";
import { createPost, createReply } from "../../util/mockData";

function Container({ onCreate, placeholder, button, id = null }) {
  const [state, dispatch] = useReducer(requestReducer, requestInitialState);

  const convertData = useCallback(
    ({ value }) => ({
      id: new Date().getTime().toString(), // Генеруємо унікальний ID на основі часу
      text: value,
      username: "user", // Ім'я користувача можна налаштувати при потребі
      date: new Date().toISOString(),
    }),
    []
  );

  const sendData = useCallback(
    async ({ dataToSend }) => {
      dispatch({ type: REQUEST_ACTION_TYPE.PROGRESS });

      //   try {
      //     const newPost = convertData(dataToSend);

      //     if (id) {
      //       const reply = await createReply(id, newPost);
      //       if (onCreate) onCreate(reply);
      //     } else {
      //       const post = await createPost(newPost);
      //       if (onCreate) onCreate(post);
      //     }

      //     dispatch({ type: REQUEST_ACTION_TYPE.RESET });
      //   } catch (error) {
      //     dispatch({
      //       type: REQUEST_ACTION_TYPE.ERROR,
      //       payload: error.message,
      //     });
      //   }
      // },
      // [convertData, onCreate, id]
      try {
        const newData = convertData(dataToSend);

        let response;
        if (id) {
          response = await createReply(id, newData);
        } else {
          response = await createPost(newData);
        }

        if (onCreate) {
          onCreate(response);
        }

        dispatch({ type: REQUEST_ACTION_TYPE.RESET });
      } catch (error) {
        dispatch({
          type: REQUEST_ACTION_TYPE.ERROR,
          payload: error.message,
        });
      }
    },
    [convertData, onCreate, id]
  );

  const handleSubmit = useCallback(
    (value) => {
      return sendData({ dataToSend: { value } });
    },
    [sendData]
  );

  return (
    <Grid>
      <FieldForm
        placeholder={placeholder}
        button={button}
        onSubmit={handleSubmit}
      />

      {state.status === LOAD_STATUS.ERROR && (
        <Alert status={state.status} message={state.message} />
      )}
      {state.status === LOAD_STATUS.PROGRESS && <Loader />}
    </Grid>
  );
}

export default memo(Container, (prev, next) => {
  console.log(prev, next);
  return true;
});

// Цей файл є контейнером, який виводить форму створення допису.
// Основний функціонал:

// Отримання та обробка введеного користувачем тексту через компонент 'FieldForm'.
// Формування та відправлення запиту на створення нового допису на сервер за допомогою fetch API.
// Обробка потенційних помилок та повідомлення про статус виконання запиту.
// Виведення компонентів завантаження та поля повідомлення про помилки.

// Цей файл використовує React, JavaScript ES6, та Fetch API для взаємодії з сервером:
// Використовує React Hook useReducer для зміни станів запиту, при цьому використовує reducer (requestReducer) та початковий стан (requestInitialState) з файлу 'request.js'.
// Функція handleSubmit: отримує текст введеного користувачем допису як аргумент та передає його до функції sendData.
// Функція sendData: створює та виконує POST запит до серверу з даними, які потрібно відправити. Вона також відправляє відповідні дії до стану запиту в залежності від успішності запиту.
// Функція convertData: виконує формування об'єкта запросу для відправки на сервер.

// ### Детальний опис функцій, методів та властивостей

// #### Функції:
// 1. **handleSubmit(value)**
//    - **Опис**: Обробляє подію надсилання даних на сервер.
//    - **Параметри**: `value` - значення, що надходить з форми.
//    - **Дії**: Викликає функцію `sendData` з об'єктом `data` для відправлення даних на сервер.

// 2. **sendData({ dataToSend })**
//    - **Опис**: Відправляє POST-запит на сервер для створення нового посту.
//    - **Параметри**: `{ dataToSend }` - об'єкт даних для відправлення.
//    - **Дії**:
//      - Встановлює статус загрузки на `LOAD_STATUS.PROGRESS`.
//      - Відправляє запит на сервер з даними, конвертованими за допомогою `convertData`.
//      - Обробляє отриману відповідь: якщо успішно - очищає статус та, якщо передано функцію `onCreate`, викликає її; якщо невдало - встановлює статус `LOAD_STATUS.ERROR` та встановлює повідомлення про помилку.

// 3. **convertData({ value })**
//    - **Опис**: Перетворює вхідні дані у формат JSON перед відправленням на сервер.
//    - **Параметри**: `{ value }` - дані для конвертації.
//    - **Повертає**: Рядок JSON з додатковою інформацією: `text`, `username` та `postId`.

// #### Властивості:
// 1. **status**
//    - **Тип**: State
//    - **Опис**: Визначає статус запиту: `null`, `LOAD_STATUS.PROGRESS`, або `LOAD_STATUS.ERROR`.

// 2. **message**
//    - **Тип**: State
//    - **Опис**: Повідомлення про помилку або стан операції.

// 3. **onCreate**
//    - **Тип**: Prop
//    - **Опис**: Функція, яка викликається у випадку успішного створення посту.

// 4. **placeholder**
//    - **Тип**: Prop
//    - **Опис**: Текстова вказівка для поля вводу у формі.

// 5. **button**
//    - **Тип**: Prop
//    - **Опис**: Текст на кнопці для відправлення форми.

// 6. **id**
//    - **Тип**: Prop
//    - **Опис**: Ідентифікатор посту, який може передаватися при створенні нового посту.

// #### Компоненти:
// - **FieldForm**: Компонент для введення даних і події відправки форми.
// - **Grid**: Компонент для розміщення елементів у вигляді сітки.
// - **Alert**: Компонент для відображення повідомлень про помилки.
// - **Loader**: Компонент для відображення індікатора загрузки.

// Даний файл містить функції для взаємодії з сервером, властивості для управління станом та параметрами відображення компонентів.

// file getDate.js
export const getDate = (time) => {
  // Створення об'єкта Date на основі Unix-часу
  const date = new Date(time);

  // Отримання дати та часу в потрібному форматі
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  // Форматування результату в "dd.mm hh:mm" і виведення
  const formattedDate = `${day}.${month} ${hours}:${minutes}`;
  return formattedDate;
};

// У цьому фрагменті коду JavaScript визначена функція `getDate`, яка отримує параметр `time` (припускаючи, що це Unix-час***) та повертає відформатовану дату і час у вигляді рядка. Основні кроки в коді:

// 1. Створення об'єкта `Date` на основі Unix-часу, переданого у вигляді параметру `time`.
// 2. Отримання дня, місяця, годин та хвилин з об'єкта `Date` та форматування їх, щоб мати завжди двозначні значення.
// 3. Форматування результату у вигляді рядка з датою у форматі "dd.mm hh:mm".
// 4. Повернення сформатованої дати як рядкового значення.

// Тут використовано кілька ключових аспектів синтаксису, варто детально розглянути:

// 1. **Arrow Function (Стрілкова функція)**:
//    - Визначення функції `getDate` використовує стрілкову функцію.
//    - Стрілкові функції коротші за звичайні функції, не мають `this`, та автоматично повертають значення.

// 2. **Константа `const`**:
//    - `getDate` визначено за допомогою `const`, що означає, що ця функція є незмінною.

// 3. **Рядковий метод `padStart()`**:
//    - Метод `padStart(2, "0")` застосовуъться до числа, щоб додавати "0" в початок рядка, якщо рядок не досягає заданої довжини (в даному випадку 2).

// 4. **Використання об'єкта Data**:
//    - Створюється новий екземпляр об'єкта `Date` на підставі числового Unix-часу `time`.

// 5. **Шаблонні рядки (Template Strings)**:
//    - `formattedDate` створений за допомогою шаблонних рядків, де змінні включаються в рядок за допомогою `${...}`.

// 6. **Метод `toString()`**:
//    - Метод `toString()` використовується для перетворення чисел на рядки для подальшо  конкатенації.

// 7. **Методи `getDate()`, `getMonth()`, `getHours()`, `getMinutes()`**:
//    - Ці методи визначають день місяця, місяць, годину та хвилину для об'єкта `Date`.

// 8. **Використання ` ...`  в рядках**:
//    - Прикладом є використання рядка `${day}.${month} ${hours}:${minutes}` для форматування дати та часу.

// Ці елементи синтаксису використовуються разом для створення функції, що отримує Unix-час та повертає його у форматі "dd.mm hh:mm". Кожен елемент має важливе значення у функціонуванні та виведенні дати у відповідному форматі.

// *** Unix-час (також відомий як час Unix або POSIX-час) - це система обліку часу, яка використовується в багатьох операційних системах. Ця система вимірює час у секундах, що минули з 00:00:00 UTC 1 січня 1970 року (без врахування високосних років). Unix-час широко використовується в програмуванні, тестуванні та системному адмініструванні, оскільки він забезпечує зручну можливість вимірювання часу.
// При використанні Unix-часу у програмуванні, час можна представити як ціле число секунд. Це зручно для порівнянь, обчислень та зберігання дат та часу в комп'ютерних системах.
// Таким чином, при передачі Unix-часу у функцію, таку як `getDate` у наданому вами коді JavaScript, ми можемо отримати відформатовану дату та час із значення Unix-часу як вхідним параметром.

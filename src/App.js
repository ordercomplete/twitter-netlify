// file App.js
import { useMemo, createContext, useReducer, useEffect } from "react";
import Page from "./component/page";
import PostList from "./container/post-list";
import "./theme.css";
import { getPosts, savePosts } from "./util/mockData";
export const THEME_TYPE = {
  LIGHT: "light",
  DARK: "dark",
};

export const ThemeContext = createContext(null);

const THEME_ACTION_TYPE = { TOGGLE: "toggle" };

const themeReducer = (state, action) => {
  switch (action.type) {
    case THEME_ACTION_TYPE.TOGGLE:
      return state === THEME_TYPE.DARK ? THEME_TYPE.LIGHT : THEME_TYPE.DARK;
    default:
      return state;
  }
};

function App() {
  const [currentTheme, dispatch] = useReducer(themeReducer, THEME_TYPE.LIGHT);

  const theme = useMemo(
    () => ({
      value: currentTheme,
      toggle: () => dispatch({ type: THEME_ACTION_TYPE.TOGGLE }),
      setTheme: () => {
        document.documentElement.style.setProperty(
          "backgroundColor",
          `var(--${currentTheme}-bg-color)`
        );
        document.documentElement.style.setProperty(
          "color",
          `var(--${currentTheme}-text-color)`
        );
        document.documentElement.style.setProperty(
          "background",
          `var(--${currentTheme}-accent-color)`
        );
      },
    }),
    [currentTheme, dispatch]
  );
  useEffect(() => {
    const posts = getPosts();
    savePosts(posts);
  }, []);
  useEffect(() => {
    theme.setTheme();
  }, [theme]);
  return (
    <Page>
      <ThemeContext.Provider value={theme}>
        <PostList />
      </ThemeContext.Provider>
    </Page>
  );
}

export default App;

// Пояснення:
//1. import { useState, useMemo } from "react"; - цей рядок коду імпортує функції useState та useMemo з бібліотеки "react". useState використовується для створення стану в компоненті, а useMemo використовується для мемоізації значень.

//2. const THEME_TYPE = { LIGHT: "light", DARK: "dark" };
// - тут створюється сталий об'єкт THEME_TYPE, який містить два значення: "LIGHT" і "DARK".

//3. function App() { ... } - це функція-компонент, яка представляє основний компонент додатка.

//4. const [currentTheme, setTheme] = useState(THEME_TYPE.LIGHT);
// - в цьому рядку використовується useState для створення стану currentTheme і функції setTheme для зміни цього стану. Початкове значення currentTheme встановлене як THEME_TYPE.LIGHT.

//6. const theme = useMemo(() => ({ currentTheme, setTheme, THEME_TYPE }), [currentTheme]);
// - тут використовується useMemo для обчислення значення theme на основі currentTheme, setTheme та THEME_TYPE. При зміні currentTheme, theme буде перераховано.

//7. <Page>...</Page> - це JSX-компонент, який представляє сторінку додатка.

//8. <PostList theme={theme} /> - це JSX-компонент, який представляє список постів і приймає theme в якості властивості.

// Цей код функціонує як основний веб-додаток, який використовує React. Він встановлює початкову тему (THEME_TYPE.LIGHT), створює об'єкт theme з допомогою useMemo і передає його властивість theme до компонента PostList. Коли тема змінюється, компонент theme буде перераховано згідно з новим значенням currentTheme.

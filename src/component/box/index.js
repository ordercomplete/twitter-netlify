// file box.js
import { useContext } from "react";
import "./index.css";
import { ThemeContext } from "../../App";

export default function Component({ children, className = "", style = {} }) {
  const { value: theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        ...style,
        backgroundColor: `var(--${theme}-bg-color)`,
      }}
      className={`box ${className}`}
    >
      {children}
    </div>
  );
}

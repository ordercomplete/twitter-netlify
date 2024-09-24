import { memo, useContext } from "react";
import "./index.css";
import Grid from "../grid";
import { ThemeContext } from "../../App";

function Component({ username, date, text }) {
  const { value: theme } = useContext(ThemeContext);
  return (
    <Grid>
      <div className="post-content">
        <span
          style={{
            color: `var(--${theme}-text-color-user)`,
          }}
          className="post-content__username"
        >
          @{username}
        </span>
        <span
          style={{
            color: `var(--${theme}-text-color-date)`,
          }}
          className="post-content__date"
        >
          {date}
        </span>
      </div>
      <p
        style={{
          color: `var(--${theme}-text-color)`,
        }}
        className="post-content__text"
      >
        {text}
      </p>
    </Grid>
  );
}

export default memo(Component);

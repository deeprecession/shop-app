import { useEffect, useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { useMediaQuery } from "react-responsive";

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (isSystemDark) => setIsDark(isSystemDark),
  );

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <Toggle
      checked={isDark}
      onChange={({ target }) => setIsDark(target.checked)}
      icons={{ checked: "", unchecked: "" }}
      aria-label="Dark mode toggle"
    />
  );
};

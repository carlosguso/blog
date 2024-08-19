"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    systemTheme && setTheme(systemTheme);
  }, [systemTheme, setTheme]);

  if (!mounted) return null;

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    // Remove focus after click
    if (buttonRef.current) {
      buttonRef.current.blur();
    }
  };

  return (
    <button
      ref={buttonRef}
      className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-main-accent-light dark:hover:text-main-accent focus:outline-none focus:ring-2 focus:ring-main-accent-light dark:focus:ring-main-accent"
      onClick={handleClick}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;

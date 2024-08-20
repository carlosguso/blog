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
          viewBox="0 0 32 32"
          stroke="currentColor"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M31.25 16c0-0.451-0.238-0.846-0.596-1.066l-0.005-0.003-4.9-2.969 1.367-5.563c0.023-0.089 0.036-0.192 0.036-0.298 0-0.691-0.56-1.25-1.25-1.25-0.106 0-0.209 0.013-0.308 0.038l0.009-0.002-5.564 1.366-2.968-4.9c-0.223-0.364-0.618-0.603-1.069-0.603s-0.846 0.239-1.066 0.597l-0.003 0.005-2.969 4.9-5.563-1.366c-0.089-0.023-0.192-0.036-0.298-0.036-0.69 0-1.25 0.56-1.25 1.25 0 0.106 0.013 0.208 0.038 0.306l-0.002-0.009 1.366 5.564-4.9 2.969c-0.364 0.223-0.603 0.618-0.603 1.069s0.239 0.846 0.597 1.066l0.005 0.003 4.9 2.968-1.366 5.564c-0.023 0.090-0.036 0.193-0.036 0.299 0 0.691 0.56 1.25 1.25 1.25 0.106 0 0.208-0.013 0.306-0.038l-0.009 0.002 5.564-1.367 2.969 4.9c0.223 0.363 0.618 0.602 1.069 0.602s0.846-0.238 1.066-0.596l0.003-0.005 2.968-4.9 5.564 1.367c0.090 0.023 0.193 0.036 0.299 0.036 0.691 0 1.251-0.56 1.251-1.251 0-0.106-0.013-0.209-0.038-0.308l0.002 0.009-1.367-5.564 4.9-2.968c0.363-0.223 0.601-0.618 0.601-1.069v0zM18.719 22.508c-0.796 0.339-1.722 0.536-2.694 0.536-3.888 0-7.040-3.152-7.040-7.040s3.152-7.040 7.040-7.040c3.888 0 7.040 3.152 7.040 7.040 0 0.972-0.197 1.898-0.553 2.74l0.017-0.046c-0.724 1.735-2.076 3.086-3.765 3.793l-0.046 0.017z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm7.019,16.619A8.994,8.994,0,1,1,11.752,3.013a10.981,10.981,0,0,0,7.291,14.574Zm1.131-1.825A8.936,8.936,0,0,1,13.867,3.2a8.975,8.975,0,0,1,6.283,12.6Z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;

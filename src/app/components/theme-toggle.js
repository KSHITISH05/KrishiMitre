"use client"; // Mark this as a Client Component

import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm">Dark Mode</span>
      <label className="relative inline-block w-10 h-6">
        <input
          type="checkbox"
          className="opacity-0 w-0 h-0"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full transition duration-300 before:absolute before:w-4 before:h-4 before:left-1 before:bottom-1 before:bg-white before:rounded-full before:transition before:duration-300 before:transform before:translate-x-0"></span>
      </label>
    </div>
  );
}
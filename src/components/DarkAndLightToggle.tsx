"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkAndLightToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    // Return a placeholder with the same dimensions to prevent layout shift
    return (
      <div className="flex items-center">
        <div className="p-2 rounded-full bg-transparent w-9 h-9"></div>
        <span className="ml-2 text-sm font-medium hidden sm:inline invisible">Mode</span>
      </div>
    );
  }

  const isDarkMode = theme === "dark";

  return (
    <div className="flex items-center">
      <button
        onClick={() => setTheme(isDarkMode ? "light" : "dark")}
        className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc--300 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? (
          // Sun icon for dark mode (clicking will switch to light)
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-5 h-5 text-yellow-200"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        ) : (
          // Moon icon for light mode (clicking will switch to dark)
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-5 h-5 text-purple-400"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        )}
      </button>
      <span onClick={() => setTheme(isDarkMode ? "light" : "dark")} className="ml-2 text-sm font-medium hidden sm:inline cursor-pointer">
        Mode
      </span>
    </div>
  );
}
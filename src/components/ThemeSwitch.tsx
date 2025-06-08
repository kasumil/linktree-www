'use client';
import { useEffect, useState } from 'react';

export default function ThemeSwitch() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  }, []);

  const toggle = () => {
    document.documentElement.classList.toggle('dark');
    setTheme((prev) => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggle}
      aria-label="다크모드 토글"
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 ml-2 text-gray-900 dark:text-white"
    >
      {theme === 'dark' ? '🌞' : '🌙'}
    </button>
  );
} 
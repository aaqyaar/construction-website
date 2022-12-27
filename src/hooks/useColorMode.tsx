'use client';

import { useState, useEffect } from 'react';

export default function useColorMode() {
  const [mode, setMode] = useState('dark');

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setMode('dark');
    } else {
      setMode('light');
    }
  }, []);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setMode(localTheme);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('theme', mode);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(mode);
  }, [mode]);

  const toggleMode = () => {
    mode === 'dark' ? setMode('light') : setMode('dark');
  };

  return { mode, toggleMode };
}

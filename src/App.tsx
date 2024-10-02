// src/App.tsx
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Demos from '@/pages/Demos';
import '@/assets/styles/index.scss';
import Moon from '@/assets/icons/Moon';
import Sun from '@/assets/icons/Sun';

const App: React.FC = () => {
  const [theme, setTheme] = useState<string>('light');

  // mish
  // toggleTheme стоит сделать отдельным компонентом
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark-theme' ? 'light' : 'dark-theme';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
  };

  return (
    <div className={`App`}>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'dark-theme' ? <Sun /> : <Moon />}
      </button>

      <Routes>
        <Route path="/" element={<Demos />} />
      </Routes>
    </div>
  );
};

export default App;

// src/App.tsx
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Demos from './pages';
import '@/assets/styles/index.scss';

const App: React.FC = () => {
  const [theme, setTheme] = useState<string>('light');

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
      <button onClick={toggleTheme}>
        {theme === 'dark-theme' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      </button>

      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav> */}

      <Routes>
        <Route path="/" element={<Demos />} />
      </Routes>
    </div>
  );
};

export default App;

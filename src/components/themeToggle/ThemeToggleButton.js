
// 'use client'
// import React from 'react';
// import { useTheme } from '@/contexts/ThemeContext';

// export default function ThemeToggle  ()  {
//   const { theme , toggleTheme } = useTheme();

//   return (
//     <div onClick={toggleTheme} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
//       {theme === 'light' ? '🌞' : '🌜'}
//       <span style={{ marginLeft: '8px' }}>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
//     </div>
//   );
// };

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext'; // Adjust the import path as necessary

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggleButton;

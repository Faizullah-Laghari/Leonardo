
// import React, { createContext, useContext, useState, useEffect } from 'react';

// const ThemeContext = createContext({
//     theme: 'light', 
//     setTheme: () => {} // Provide a noop function
//   });

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light');

//   useEffect(() => {
//     const storedTheme = localStorage.getItem('theme');
//     if (storedTheme) {
//       setTheme(storedTheme);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);


// ThemeProvider with direct application of theme to the document body

import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {} // Provide a noop function as a default
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.dataset.theme = theme; // Apply theme to body directly here
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

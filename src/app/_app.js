
import '../styles/theme.css';
import { ThemeProvider,useTheme } from '@/contexts/ThemeContext';
import RootLayout from './layout';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ThemedApp>
        <RootLayout>
        <Component {...pageProps} />
        </RootLayout>
      </ThemedApp>
    </ThemeProvider>
  );
}

function ThemedApp({ children }) {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return <>{children}</>;
}

export default MyApp;


// // pages/_app.js
// import { ThemeProvider } from '@/contexts/ThemeContext';
// import '../styles/theme.css';

// function MyApp({ Component, pageProps }) {
//   return (
//     <ThemeProvider>
//       <Component {...pageProps} />
//     </ThemeProvider>
//   );
// }

// export default MyApp;

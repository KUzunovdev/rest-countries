import type { AppProps } from 'next/app'
import '../styles/global.scss'
import { ThemeProvider } from '../context/ThemeContext'
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
  );
}
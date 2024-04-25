import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "./Header";
import styles from "../styles/Layout.module.scss";
import { ThemeProvider } from "../context/ThemeContext";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <ThemeProvider>
    <header>
      <Header />
    </header>
    <main className={styles['main-content']}>
    {children}
    </main>
    <footer>
    </footer>
    </ThemeProvider>
  </div>
);

export default Layout;
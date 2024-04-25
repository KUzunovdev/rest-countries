import React from "react";
import ThemeToggle from "./ThemeToggle";
import styles from "../styles/Header.module.scss";


const Header: React.FC = () => {
    return (
      <div className={styles.header}>
        <h1>Where in the world?</h1>
        <ThemeToggle />
      </div>
    );
  };
  
  export default Header;
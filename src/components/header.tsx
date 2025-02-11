import React from "react";
import { SlRefresh } from "react-icons/sl";
import { IoMenuOutline } from "react-icons/io5";
import styles from "../styles/header.module.css";

const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <IoMenuOutline />
            <h1>Dashboard</h1>
            <SlRefresh />
        </header>
    )
}

export default Header;
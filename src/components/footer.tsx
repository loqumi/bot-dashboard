import React from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { TiShoppingCart } from "react-icons/ti";
import { CiSettings } from "react-icons/ci";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { TbCoin } from "react-icons/tb";
import styles from "../styles/footer.module.css";

const Footer = () => {
    return (
        <nav className={styles.footerNav}>
            <TfiMenuAlt />
            <LuChartNoAxesCombined />
            <TiShoppingCart />
            <TbCoin />
            <CiSettings />
        </nav>
    )
}

export default Footer;
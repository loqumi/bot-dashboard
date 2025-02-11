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
            <div className={styles.active}>
                <TfiMenuAlt />
                Dashboard
            </div>
            <div>
                <LuChartNoAxesCombined className={styles.iconStroke} />
                Megabot
            </div>
            <div>
                <TiShoppingCart />
                Bot market
            </div>
            <div>
                <TbCoin className={styles.iconStroke}/>
                Coin prices
            </div>
            <div>
                <CiSettings />
                Profile
            </div>
        </nav>
    )
}

export default Footer;
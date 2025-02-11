import React from "react";
import { TimeRange } from "../App";
import { Bot } from "../types/types";
import orangeIcon from "../icons/orange.png";
import attackIcon from "../icons/attack.png";
import defenceIcon from "../icons/defence.png";
import megabotIcon from "../icons/megabot.png";
import balanceIcon from "../icons/balance.png";
import styles from "../styles/bots.module.css";
import noImageIcon from "../icons/place_bot_here.png";

type BotIconKey = keyof typeof botIcons;

const botIcons = {
    red: attackIcon,
    green: defenceIcon,
    yellow: megabotIcon,
    blue: balanceIcon,
    orange: orangeIcon,
    white: noImageIcon,
};

const Bots: React.FC<{ timeRange: TimeRange, data: Bot[] }> = ({timeRange, data}) => {
    return (
        <div className={styles.botsContainer}>
            {data.map((bot) => {
                const iconName = bot.name.split('_')[0] as BotIconKey;
                return (
                    <div className={styles.botItem} key={bot.name}>
                        <img src={botIcons[iconName]} alt={bot.name} />
                        <div>{bot.name}</div>
                        <div style={{ color: bot[timeRange] > 0 ? 'green' : 'red' }}>
                            {bot[timeRange]}%
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Bots;
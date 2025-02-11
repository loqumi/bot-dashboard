import data from "../data.json";
import { TimeRange } from "../App";
import orangeIcon from "../icons/orange.png";
import attackIcon from "../icons/attack.png";
import defenceIcon from "../icons/defence.png";
import megabotIcon from "../icons/megabot.png";
import balanceIcon from "../icons/balance.png";
import React, { useEffect, useState } from "react";
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

const Bots: React.FC<{ timeRange: TimeRange }> = ({timeRange}) => {
    const [botsData, setBotsData] = useState(data.bots);

    useEffect(() => {
        const savedData = localStorage.getItem('botsData');
        if (savedData) {
            setBotsData(JSON.parse(savedData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('botsData', JSON.stringify(botsData));
    }, [botsData]);

    return (
        <div>
            {botsData.map((bot) => {
                const iconName = bot.name.split('_')[0] as BotIconKey;
                return (
                    <div key={bot.name}>
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
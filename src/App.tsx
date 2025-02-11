import data from "./data.json";
import Bots from "./components/bots";
import React, { useState } from 'react';
import Footer from "./components/footer";
import Header from "./components/header";
import ChartLine from "./components/chart";
import styles from "./styles/app.module.css";
import { DashboardInfo } from "./types/types";
import { BsFillHCircleFill } from "react-icons/bs";

export type TimeRange = '24h' | '7d' | '30d' | 'all_time';

const isValidTimeRange = (value: string | null): value is TimeRange => {
    return value === '24h' || value === '7d' || value === '30d' || value === 'all_time';
};

function App() {
    const savedTime = localStorage.getItem('savedTime');
    const initialTimeRange = isValidTimeRange(savedTime) ? savedTime : 'all_time';
    const [timeRange, setTimeRange] = useState<TimeRange>(initialTimeRange);

    const handleTimeRangeChange = (range: TimeRange) => {
        setTimeRange(range);
        localStorage.setItem('savedTime', range);
    };


  return (
      <div>
        <Header />

        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.capitalInfo}>
                    <p>TRADING CAPITAL</p>
                    <p>{data.trading_capital} BTC</p>
                </div>
                <div className={styles.coinsContainer}>
                    <p>BALANCE: <b>{data.balance}</b> <BsFillHCircleFill /></p>
                    <p>ON HOLD: <b>{data.on_hold}</b> <BsFillHCircleFill /></p>
                </div>
            </div>

            <ChartLine timeRange={timeRange} />
            <Bots timeRange={timeRange} data={(data as DashboardInfo).bots} />

            <div className={styles.buttonContainer}>
                <p>Time Range:</p>
                <button className={timeRange === "24h" ? styles.active : ""}
                        onClick={() => handleTimeRangeChange('24h')}>24h</button>
                <button className={timeRange === "7d" ? styles.active : ""}
                        onClick={() => handleTimeRangeChange('7d')}>7 days</button>
                <button className={timeRange === "30d" ? styles.active : ""}
                        onClick={() => handleTimeRangeChange('30d')}>30 days</button>
                <button className={timeRange === "all_time" ? styles.active : ""}
                        onClick={() => handleTimeRangeChange('all_time')}>All time</button>
            </div>
        </div>

        <Footer />
      </div>
  );
}

export default App;

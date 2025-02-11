import data from "./data.json";
import Bots from "./components/bots";
import React, { useState } from 'react';
import ChartLine from "./components/chart";
import { DashboardInfo } from "./types/types";

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
    <div className="App">
        <h1>Dashboard</h1>
        <div>
            TRADING CAPITAL: {data.trading_capital} ETH
            <div>
                BALANCE: {data.balance}
                ON HOLD: {data.on_hold}
            </div>
        </div>
        <ChartLine timeRange={timeRange} />
        <Bots timeRange={timeRange} data={(data as DashboardInfo).bots} />
        <div>
            <button onClick={() => handleTimeRangeChange('24h')}>24h</button>
            <button onClick={() => handleTimeRangeChange('7d')}>7 days</button>
            <button onClick={() => handleTimeRangeChange('30d')}>30 days</button>
            <button onClick={() => handleTimeRangeChange('all_time')}>All time</button>
        </div>
    </div>
  );
}

export default App;

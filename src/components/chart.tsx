import React from "react";
import { TimeRange } from "../App";
import { Line } from 'react-chartjs-2';
import styles from "../styles/chart.module.css";
import {
    CategoryScale,
    Chart as ChartJS,
    Filler, Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    Filler,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
        y: {
            display: false,
        }
    }
};

const ChartLine: React.FC<{ timeRange: TimeRange }> = ({ timeRange }) => {

    const getRandomChart = () => ({
        labels: ['22.04', '23.04', '24.04', '25.04', '26.04'],
        datasets: [
            {
                label: 'Profit',
                data: Array.from({ length: 5 }, (_, i) => ({ x: `2${i + 2}.04`, y: Math.random() * 100 })),
                backgroundColor: 'rgb(0 123 220)',
                borderColor: 'rgb(0 123 220)',
                fill: 0,
                tension: 0.1,
            }, {
                label: 'background',
                data: [{x: '22.04', y:0}, {x: '26.04', y:0}],
                backgroundColor: 'rgba(0, 123, 220, 0.2)',
                borderWidth: 0,
                fill: 0,
                radius: 0,
            }
        ],
    });

    return (
        <div className={styles.chartContainer} key={timeRange}>
            <Line options={options} data={getRandomChart()} />
            <div>+{Math.floor(Math.random() * 100)}%</div>
        </div>
    )
}

export default ChartLine;
import '../styles/TempChart.css';
import {Line} from 'react-chartjs-2';
import { useState, useEffect } from 'react';

export default function TempChart({tempData}) {
    const [chartData, setChartData] = useState({});

    const updateChartData = () => {
        setChartData({
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            datasets: [
                {
                    label: "temperature",
                    data: tempData,
                    backgroundColor: [ 'rgba(255, 255, 255, 1)' ],
                    borderWidth: 4
                }
            ]
        });
    }

    useEffect(() => updateChartData(), []); // Upon load, call updateChartData. 

    return (
        <div className="Chart">
            <Line data={chartData} />
        </div>
    )
};

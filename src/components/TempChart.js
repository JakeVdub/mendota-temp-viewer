import '../styles/TempChart.css';
import {Line} from 'react-chartjs-2';
import { useState, useEffect } from 'react';

export default function TempChart({waterTempData}) {
    const [chartData, setChartData] = useState({});

    // Helper function for formating a Date object as a string ("MM/DD HH:MM")
    const convertDateToString = (dateObj) => {
        let dateStr = (dateObj.getMonth() + 1) + "/" + dateObj.getDate();
        let hours = dateObj.getHours().toString().length > 1 ? dateObj.getHours() : "0" + dateObj.getHours();
        let minutes = dateObj.getMinutes().toString().length > 1 ? dateObj.getMinutes() : "0" + dateObj.getMinutes();
        return dateStr + " " + hours + ":" + minutes;
    };

    const updateChartData = () => {
        setChartData({
            labels: waterTempData.map((dataStruct) => {
                let date = new Date(dataStruct['timestamp']);
                return convertDateToString(date);
            }),
            datasets: [
                {
                    label: "0ft",
                    data: waterTempData.map((dataStruct) => dataStruct['0ftTempData']),
                    backgroundColor: [ 'rgba(255, 255, 255, 1)' ],
                    borderColor: "#FFF",
                    borderWidth: 4,
                    cubicInterpolationMode: "monotone"
                },
                // {
                //     label: "3ft",
                //     data: [60, 60, 60, 62, 59, 60, 60, 60, 59, 58, 59, 60],
                //     backgroundColor: [ 'rgba(255, 255, 255, 1)' ],
                //     borderColor: "#555",
                //     borderWidth: 4,
                //     cubicInterpolationMode: "monotone"
                // }
            ],
        });
    }

    useEffect(() => updateChartData(), []); // Upon load, call updateChartData. 

    return (
        <div className="Chart">
            <Line data={chartData} />
        </div>
    )
};

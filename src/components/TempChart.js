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
                    backgroundColor: "#96f1ff",
                    borderColor: "#96f1ff",
                    borderWidth: 3,
                    cubicInterpolationMode: "monotone"
                },
                {
                    label: "10ft",
                    data: waterTempData.map((dataStruct) => dataStruct['10ftTempData']),
                    backgroundColor: "#5ee2ff",
                    borderColor: "#5ee2ff",
                    borderWidth: 3,
                    cubicInterpolationMode: "monotone"
                },
                {
                    label: "20ft",
                    data: waterTempData.map((dataStruct) => dataStruct['20ftTempData']),
                    backgroundColor: "#00d1ff",
                    borderColor: "#00d1ff",
                    borderWidth: 3,
                    cubicInterpolationMode: "monotone"
                },
                {
                    label: "30ft",
                    data: waterTempData.map((dataStruct) => dataStruct['30ftTempData']),
                    backgroundColor: "#00bfff",
                    borderColor: "#00bfff",
                    borderWidth: 3,
                    cubicInterpolationMode: "monotone"
                },
                {
                    label: "40ft",
                    data: waterTempData.map((dataStruct) => dataStruct['40ftTempData']),
                    backgroundColor: "#00abff",
                    borderColor: "#00abff",
                    borderWidth: 3,
                    cubicInterpolationMode: "monotone"
                },
                {
                    label: "50ft",
                    data: waterTempData.map((dataStruct) => dataStruct['50ftTempData']),
                    backgroundColor: "#0096ff",
                    borderColor: "#0096ff",
                    borderWidth: 3,
                    cubicInterpolationMode: "monotone"
                },
                {
                    label: "60ft",
                    data: waterTempData.map((dataStruct) => dataStruct['60ftTempData']),
                    backgroundColor: '#007dff',
                    borderColor: "#007dff",
                    borderWidth: 3,
                    cubicInterpolationMode: "monotone"
                },
            ]
        });
    }

    useEffect(() => updateChartData(), []); // Upon load, call updateChartData. 

    return (
        <div className="Chart">
            <Line data={chartData} />
        </div>
    );
};

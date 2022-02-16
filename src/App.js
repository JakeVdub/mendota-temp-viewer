import './App.css';
import Header from './components/Header';
import TempChart from './components/TempChart';
import { useState, useEffect } from 'react';

export default function App() {
    const API_URL = "http://metobs.ssec.wisc.edu/api/data.json?site=mendota&inst=buoy&symbols=water_temp_1:water_temp_6:water_temp_9:water_temp_12:water_temp_15:water_temp_18:water_temp_21&begin=-24:00:00&interval=1h";

    const convertCToF = (tempC) => (tempC * 1.8) + 32;

    // Helper function for formating a Date object as a string ("MM/DD HH:MM")
    const convertDateToString = (dateObj) => {
        let dateStr = (dateObj.getMonth() + 1) + "/" + dateObj.getDate();
        let hours = dateObj.getHours().toString().length > 1 ? dateObj.getHours() : "0" + dateObj.getHours();
        let minutes = dateObj.getMinutes().toString().length > 1 ? dateObj.getMinutes() : "0" + dateObj.getMinutes();
        return dateStr + " " + hours + ":" + minutes;
    };

    useEffect(() => {
        fetch(API_URL).then((response) => response.json()).then((data) => {
            let apiResults = data.results;
            let dataArr = [];

            for (let i = 0; i < apiResults.data.length; i++) {
                dataArr.push({
                    'timestamp': apiResults.timestamps[i],
                    '0ftTempData': convertCToF(apiResults.data[i][0]),
                    '10ftTempData': convertCToF(apiResults.data[i][1]),
                    '20ftTempData': convertCToF(apiResults.data[i][2]),
                    '30ftTempData': convertCToF(apiResults.data[i][3]),
                    '40ftTempData': convertCToF(apiResults.data[i][4]),
                    '50ftTempData': convertCToF(apiResults.data[i][5]),
                    '60ftTempData': convertCToF(apiResults.data[i][6]),
                });
            }

            const borderWidth = 3;
            const cubicInterpolationMode = "monotone"

            // TODO: Make a function that generates the dataset object array instead of manually writing it out
            setWaterTempData({
                labels: dataArr.map((dataStruct) => {
                    let date = new Date(dataStruct['timestamp']);
                    return convertDateToString(date);
                }),
                datasets: [
                    {
                        label: "0ft",
                        data: dataArr.map((dataStruct) => dataStruct['0ftTempData']),
                        backgroundColor: "#96f1ff",
                        borderColor: "#96f1ff",
                        borderWidth: borderWidth,
                        cubicInterpolationMode: cubicInterpolationMode
                    },
                    {
                        label: "10ft",
                        data: dataArr.map((dataStruct) => dataStruct['10ftTempData']),
                        backgroundColor: "#5ee2ff",
                        borderColor: "#5ee2ff",
                        borderWidth: borderWidth,
                        cubicInterpolationMode: cubicInterpolationMode
                    },
                    {
                        label: "20ft",
                        data: dataArr.map((dataStruct) => dataStruct['20ftTempData']),
                        backgroundColor: "#00d1ff",
                        borderColor: "#00d1ff",
                        borderWidth: borderWidth,
                        cubicInterpolationMode: cubicInterpolationMode
                    },
                    {
                        label: "30ft",
                        data: dataArr.map((dataStruct) => dataStruct['30ftTempData']),
                        backgroundColor: "#00bfff",
                        borderColor: "#00bfff",
                        borderWidth: borderWidth,
                        cubicInterpolationMode: cubicInterpolationMode
                    },
                    {
                        label: "40ft",
                        data: dataArr.map((dataStruct) => dataStruct['40ftTempData']),
                        backgroundColor: "#00abff",
                        borderColor: "#00abff",
                        borderWidth: borderWidth,
                        cubicInterpolationMode: cubicInterpolationMode
                    },
                    {
                        label: "50ft",
                        data: dataArr.map((dataStruct) => dataStruct['50ftTempData']),
                        backgroundColor: "#0096ff",
                        borderColor: "#0096ff",
                        borderWidth: borderWidth,
                        cubicInterpolationMode: cubicInterpolationMode
                    },
                    {
                        label: "60ft",
                        data: dataArr.map((dataStruct) => dataStruct['60ftTempData']),
                        backgroundColor: '#007dff',
                        borderColor: "#007dff",
                        borderWidth: borderWidth,
                        cubicInterpolationMode: cubicInterpolationMode
                    },
                ]
            });
        });
    }, []); // Using an empty array for the dependencies means this will only be called one time (onLoad).

    const [waterTempData, setWaterTempData] = useState([]);

    return (
        <div className="App">
            <Header />
            <div className="Body">
                <TempChart waterTempData={waterTempData} />
            </div>
        </div>
    );
}

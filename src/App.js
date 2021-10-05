import './App.css';
import Header from './components/Header';
import TempChart from './components/TempChart';
import { useState, useEffect } from 'react';

export default function App() {
  const API_URL = "http://metobs.ssec.wisc.edu/api/data.json?site=mendota&inst=buoy&symbols=water_temp_1:water_temp_6:water_temp_9:water_temp_12:water_temp_15:water_temp_18:water_temp_21&begin=-24:00:00&interval=1h";

  const convertCToF = (tempC) => (tempC * 1.8) + 32;

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

      setWaterTempData(dataArr);
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

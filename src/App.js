import './App.css';
import Header from './components/Header';
import TempChart from './components/TempChart';
import { useState, useEffect } from 'react';

function App() {
  const API_URL = "http://metobs.ssec.wisc.edu/api/data.json?site=mendota&inst=buoy&symbols=water_temp_1:water_temp_10&begin=-24:00:00&interval=1h";

  useEffect(() => {
    fetch(API_URL).then((response) => response.json()).then((data) => {
      let apiResults = data.results;
      let dataArr = [];

      for (let i = 0; i < apiResults.data.length; i++) {
        dataArr.push({
          'timestamp': apiResults.timestamps[i],
          '0ftTempData': apiResults.data[i][0]
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

export default App;

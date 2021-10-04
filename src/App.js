import './App.css';
import Header from './components/Header';
import TempChart from './components/TempChart';
import { useState, useEffect } from 'react';

function App() {

  useEffect(() => {
    // TODO THIS IS WHERE WE RETRIEVE AND STORE THE TEMP DATA
    console.log("Retrieve data...");
    setTempData([60, 61, 62, 61, 59, 60, 65, 60, 58, 57, 55, 56]);
  }, []); // Using an empty array for the dependencies means this will only be called one time (onLoad).

  const [tempData, setTempData] = useState([]);

  return (
    <div className="App">
      <Header />
      <div className="Body">
        <TempChart tempData={tempData} />
      </div>
    </div>
  );
}

export default App;

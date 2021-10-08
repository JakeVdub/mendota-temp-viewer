import '../styles/TempChart.css';
import { Line } from 'react-chartjs-2';

export default function TempChart({ waterTempData }) {
    const options = {
        plugins: {
            legend: {
                position: "bottom",
                title: {
                    display: true,
                    text: "Water Depth"
                }
            },
            tooltip: {
                mode: 'index',
                intersect: false
            },
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: "Temp (F)"
                }    
            }
        }
    };
    return (
        <div className="Chart">
            <h1>Water Temps Over Last 24hrs</h1>
            <Line data={waterTempData} options={options} />
        </div>
    );
};

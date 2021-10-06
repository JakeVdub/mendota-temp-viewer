import '../styles/TempChart.css';
import { Line } from 'react-chartjs-2';

export default function TempChart({ waterTempData }) {
    return (
        <div className="Chart">
            <Line data={waterTempData} />
        </div>
    );
};

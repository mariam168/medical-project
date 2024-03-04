import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { VictoryPie, VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory';
import home_icon from './Assets/home_icon.png';
import dashboard_icon from './Assets/dashboard_icon.png';
import mammograph_icon from './Assets/mammograph_icon.png';
import pathology_icon from './Assets/pathology_icon.png';
import patient_icon from './Assets/patient_icon.png';
import doctor_icon from './Assets/doctor_icon.png';

export default function Dashboard() {
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const [percentage3, setPercentage3] = useState(0);

  const pieChartData = [
    { x: 'hormone', y: 20000 },
    { x: 'chemical', y: 30000 },
    { x: 'rectangle', y: 10000 },
  ];

  const barChartData = [
    { x: 'hormone', y: 30 },
    { x: 'chemical', y: 40 },
    { x: 'rectangle', y: 30 },
  ];

  useEffect(() => {
    const total = pieChartData.reduce((sum, dataPoint) => sum + dataPoint.y, 0);
    setPercentage1((pieChartData[0].y / total) * 100);
    setPercentage2((pieChartData[1].y / total) * 100);
    setPercentage3((pieChartData[2].y / total) * 100);
  }, [pieChartData]);

  return (
    <div className="Dashboard">
      <aside className="aside_nav">
        <ul>
          <li><Link to="/"><img src={home_icon} alt="Home" />Home</Link></li>
          <li><Link to="/Dashboard"><img src={dashboard_icon} alt="Dashboard" />Dashboard</Link></li>
          <li><Link to="/Patients"><img src={patient_icon} alt="Patients" />Patients</Link></li>
          <li><Link to="/Doctors"><img src={doctor_icon} alt="Doctors" />Doctors</Link></li>
          <li><Link to="/mammograph"><img src={mammograph_icon} alt="Mammograph" />Mammograph</Link></li>
          <li><Link to="/pathology"><img src={pathology_icon} alt="Pathology" />Pathology</Link></li>
        </ul>
      </aside>
      <div className="dashboardContent">
        <h1>Dashboard Overview</h1>
        <div className="charts">
          <div className="pieChart">
            <VictoryPie data={pieChartData} colorScale={['rgb(39 195 74)', 'rgb(197, 33, 164)', 'rgb(77 0 255']} labelComponent={<VictoryLabel renderInPortal dy={-20} />} />
          </div>
          <div className="statisticalChart">
            <VictoryChart>
              <VictoryAxis tickValues={barChartData.map((dataPoint) => dataPoint.x)} />
              <VictoryAxis dependentAxis />
              <VictoryBar data={barChartData} colorScale={['#FF6384', '#36A2EB', '#FFCE56']} labels={['Label 1', 'Label 2', 'Label 3']} />
            </VictoryChart>
          </div>
        </div>
        <div className="therapy">
          <div className="rectangle" >
            <div className="hormone" 
            style={{ background: `conic-gradient(
              rgb(39 195 74) 0% ${percentage1}%, 
            transparent ${percentage1}% 100%
            )`}} ><h3>{pieChartData[0].y}</h3></div>
          </div>
          <div className="rectangle" >
            <div className="chemical"style={{ background: `conic-gradient(
              rgb(197, 33, 164) 0% ${percentage2}%, 
            transparent ${percentage2}% 100%
            )`}} ><h3>{pieChartData[1].y}</h3></div>
            </div>
          <div className="rectangle">
            <div className="target" style={{ background: `conic-gradient(
             rgb(77 0 255) 0% ${percentage3}%, 
            transparent ${percentage3}% 100%
            )`}}><h3>{pieChartData[2].y}</h3></div>
            </div>
        </div>
      </div>
    </div>
  );
}


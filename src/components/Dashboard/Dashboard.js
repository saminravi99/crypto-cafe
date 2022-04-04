import React from 'react';
import './Dashboard.css'
import LineCharts from '../Charts/LineChart';
import PieCharts from '../Charts/PieChart';
import BarCharts from '../Charts/BarChart';
import AreaCharts from '../Charts/AreaChart';


const Dashboard = () => {

    


   
    return (
        <div className="container charts" >

           <div className="d-flex flex-lg-row flex-column align-items-center justify-content-around ">
                <div className="d-flex align-items-center mt-5 mt-lg-0 pe-4 pe-lg-0">
                    <LineCharts></LineCharts>
                </div>

                <div className="p-5" >
                    <div>
                        <PieCharts></PieCharts>
                    </div>
                </div>
                
           </div>
           <div className="d-flex flex-lg-row flex-column align-items-center justify-content-around ">
                <div className="d-flex align-items-center mt-5 mt-lg-0 pe-4 pe-lg-0">
                    <BarCharts></BarCharts>
                    
                </div>

                <div className="p-5" >
                    <div>
                        <AreaCharts></AreaCharts>
                    </div>
                </div>
                
           </div>
        </div>

        
    );
};

export default Dashboard;
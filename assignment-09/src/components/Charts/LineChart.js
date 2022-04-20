import React, { useContext, useEffect } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { AllContext } from '../App/App';

const LineCharts = () => {
    
     const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);


    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }
    );

    function handleWindowSizeChange() {
        setWindowWidth(window.innerWidth);
    }

    const {data} = useContext(AllContext);

    const sellChart = (
    <LineChart width={windowWidth <= 768 ? 375 : 500} 
    height={300} data={data} margin={{ top: 5, right: 15, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="sell" stroke="#F46A06" />

        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend/>
    </LineChart>
    );
    return (
        <div>
            {sellChart}
        </div>
    );
};

export default LineCharts;
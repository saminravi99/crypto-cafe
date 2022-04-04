import React, { useContext } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { AllContext } from '../App/App';

const LineCharts = () => {
    


const {data} = useContext(AllContext);

    const sellChart = (
    <LineChart width={375} height={300} data={data} margin={{ top: 5, right: 15, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="sell" stroke="#F46A06" />

        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
    </LineChart>
    );
    return (
        <div>
            {sellChart}
        </div>
    );
};

export default LineCharts;
import React, { useContext } from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import { AllContext } from "../App/App";


export default function PieCharts() {
const {data} = useContext(AllContext);

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="revenue"
        cx={200}
        cy={200}
        outerRadius={150}
        fill="#8884d8"
      />
        <Tooltip />
      
    </PieChart>
  );
}

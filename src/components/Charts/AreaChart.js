import React, { useContext } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import { AllContext } from "../App/App";



export default function AreaCharts() {
    const {data} = useContext(AllContext);
  return (
    <AreaChart
      width={375}
      height={350}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
}

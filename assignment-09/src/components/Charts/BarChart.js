import React, { useContext, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { AllContext } from "../App/App";



export default function BarCharts() {
    const {data} = useContext(AllContext);

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

  return (
    <BarChart
      width={windowWidth <= 768 ? 375 : 500}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 30,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="investment" stackId="a" fill="#ffa35c" />
      <Bar dataKey="revenue" stackId="a" fill="#e65447" />
    </BarChart>
  );
}

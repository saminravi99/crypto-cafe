import React, { useContext, useEffect } from "react";
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
    <AreaChart
      width={windowWidth <= 768 ? 375 : 500}
      height={300}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 30,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="investment"
        stackId="1"
        stroke="#F46A06"
        fill="#F46A06"
       
      />
      <Area
        type="monotone"
        dataKey="revenue"
        stackId="1"
         stroke="#eb9375"
        fill="#eb9375"
        
      />
    </AreaChart>
  );
}

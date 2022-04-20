import React, { useContext, useEffect } from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import { AllContext } from "../App/App";



export default function PieCharts() {


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
    <PieChart width={windowWidth <= 768 ? 375 : 500}
     height={400}>
      <Pie
        data={data}
        dataKey="investment"
        cx={200}
        cy={200}
        outerRadius={60}
        fill="#ffa35c"
      />
      <Pie
        data={data}
        dataKey="revenue"
        cx={200}
        cy={200}
        innerRadius={85}
        outerRadius={110}
        fill="#f2b872"
        label
      />
      <Tooltip />
    </PieChart>
  );
}

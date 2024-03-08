import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const Intensity = (props) => {
  const {data} = props;
  const result = data.map((res) => res.intensity);

  const count = result.reduce((accumulator, currentNumber) => {
    if (accumulator[currentNumber]) {
      accumulator[currentNumber]++;
    } else {
      accumulator[currentNumber] = 1;
    }
    return accumulator;
  }, {});

  const sort = Array.from(new Set(result)).sort((a, b) => a - b);
  const car = Object.values(count);
  
  if(!sort?.length || !car?.length) return null;

  return (
    <div >

  
    
      <BarChart
        xAxis={[
          {
            stroke: 'red',
            id: "barCategories",
            data: sort,
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: car,
            label: "Intensity",
          },
        ]}
        height={300}
      />
    </div>
  );
};

export default Intensity;

import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const Year = (props) => {
 
  const { data } = props;

  const st_output = [];
  const end_output = [];
  const end_yr = data.map((res) => res.end_year);
  const strt_yr = data.map((res) => res.start_year);

  const count1 = strt_yr.reduce((accumulator, currentNumber) => {
    if (accumulator[currentNumber]) {
      accumulator[currentNumber]++;
    } else {
      accumulator[currentNumber] = 1;
    }
    return accumulator;
  }, {});
  const count2 = end_yr.reduce((accumulator, currentNumber) => {
    if (accumulator[currentNumber]) {
      accumulator[currentNumber]++;
    } else {
      accumulator[currentNumber] = 1;
    }
    return accumulator;
  }, {});

  for (const [key, value] of Object.entries(count1)) {
    // Create an object with value and label properties
    const formDataObject = {
      value: value,
      label: `start_year - ${key}`,
    };
    // Push the object into the output array
    st_output.push(formDataObject);
  }
  for (const [key, value] of Object.entries(count2)) {
    // Create an object with value and label properties
    const formDataObject = {
      value: value,
      label: `end_year - ${key}`,
    };
    // Push the object into the output array
    end_output.push(formDataObject);
  }

  if(!st_output?.length || !end_output?.length) return null;


  return (
    <div>
      <PieChart
      series={[
        {
          highlightScope: { faded: "global", highlighted: "item" },
            faded: { additionalRadius: -20, color: "gray" },
          innerRadius: 13,
          paddingAngle: 1,
          cornerRadius: 2,
          label: "Start Year",
          outerRadius: 50,
          data: st_output,
        },
        {
          highlightScope: { faded: "global", highlighted: "item" },
            faded: {  additionalRadius: -20, color: "gray" },
          innerRadius: 60,
          paddingAngle: 2,
          cornerRadius: 1,
          outerRadius: 100,
          data: end_output,
        },
      ]}
      height={300}
      slotProps={{
        legend: { hidden: true },
      }}
    />
    </div>
  );
};

export default Year;

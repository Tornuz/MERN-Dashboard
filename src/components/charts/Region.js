import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const Region = (props) => {

  const { data } = props;

  const output = [];
  const result = data.map((res) => res.region);
  const count = result.reduce((accumulator, currentNumber) => {
    if (accumulator[currentNumber]) {
      accumulator[currentNumber]++;
    } else {
      accumulator[currentNumber] = 1;
    }
    return accumulator;
  }, {});

  for (const [key, value] of Object.entries(count)) {
    // Create an object with value and label properties
    const formDataObject = {
      value: value,
      label: key,
    };
    // Push the object into the output array
    output.push(formDataObject);
  }

  if(!output?.length) return null;

  return (
    <div>
      <PieChart
        series={[
          {
            data: output,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -15, color: "gray" },
            innerRadius: 40,
            outerRadius: 100,
            paddingAngle: 1,
            cornerRadius: 2,
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

export default Region;

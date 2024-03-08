import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const Country = (props) => {

  const { data } = props;


  const output = [];
  const result = data.map((res) => res.country);
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
            faded: { additionalRadius: -30, color: "gray" },
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

export default Country;

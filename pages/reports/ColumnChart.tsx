import { Bar } from "react-chartjs-2";
import React, { useState } from "react";

interface DatasetType {
  data: number[];
  backgroundColor: string[];
}

function ColumnChart() {
  const [labels] = useState<string[]>(["2010", "2012", "2014", "2016", "2018"]);
  const [datasets] = useState<DatasetType[]>([
    {
      data: [0, 10, 20, 30, 40, 50],
      backgroundColor: ["#003f5c", "#58508d", "#bc5090", "#ff6361", "#ffa600"],
    },
  ]);

  return (
    <Bar
      data={{
        labels: labels,
        datasets: datasets,
        label: "something",
      }}
    />
  );
}

export default ColumnChart;

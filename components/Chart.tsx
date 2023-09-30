import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import {faker} from "@faker-js/faker";
import type { ChartData, ChartOptions } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options: ChartOptions<"bar"> = {
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,

  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      title: {
        display: true,
        text: "Total Borrowers",
      },
    },
  },
};

const labels:number[] = []

for(let i = 0; i < 31; i++) {
    labels.push(i)
};

export const data = {
  labels,
  datasets: [
    {
      label: "",
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: "#FFD454",
    },
    {
      label: "",
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: "#FE9F5E",
    },
    {
      label: "",
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: "#138EFF",
    },
  ],
};

export default function Chart () {
  return (
    <div className="w-full h-fit rounded-xl p-5 bg-white z-[200] relative">
      <Bar options={options} data={data} />
    </div>
  );
}




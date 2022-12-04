import React from "react";
import styles from "./Spline.module.css";
import { Line } from "react-chartjs-2";
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend,
} from "chart.js";
ChartJS.register(
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend
);

function Spline() {
   const data = {
      labels: [
         "Jan",
         "Feb",
         "Mar",
         "Apr",
         "May",
         "Jun",
         "Jul",
         "Aug",
         "Sep",
         "Octo",
         "Nov",
         "Dec",
      ],
      datasets: [
         {
            label: "Weekly",
            data: [200, 100, 150, 165, 542, 154, 225, 122, 114],
            backgroundColor: "#fff",
            borderColor: "#5F2EEA",
            pointBorderWidth: 4,
            tension: 0.4,
         },
         {
            label: "Monthly",
            data: [120, 50, 458, 650, 120, 250, 545, 122, 114],
            backgroundColor: "#fff",
            borderColor: "red",
            pointBorderWidth: 4,
            tension: 0.4,
         },
         {
            label: "Yearly",
            data: [540, 0, 600, 620, 125, 455, 211, 155, 250],
            backgroundColor: "#fff",
            borderColor: "#00BA88",
            pointBorderWidth: 4,
            tension: 0.4,
         },
      ],
   };
   const options = {
      responsive: true,
      plugins: {
         legend: "top",
         title: {
            display: true,
            text: "Avengers: End Game",
         },
      },
      scales: {
         x: {
            grid: {
               display: false,
            },
         },
         y: {
            min: 0,
            max: 800,
            ticks: {
               stepSize: 5,
               callback: (value) => value + " IDR",
            },
         },
      },
   };

   return (
      <>
         <div className={styles.chart_line} style={{}}>
            <Line data={data} options={options} />
         </div>
      </>
   );
}

export default Spline;

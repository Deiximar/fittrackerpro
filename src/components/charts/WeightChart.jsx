import { Line } from "react-chartjs-2";
import "./_WeightChart.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  SubTitle,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  SubTitle,
  Tooltip,
  Legend
);

const data = {
  labels: ["12/08", "19/08", "28/08", "04/09", "11/09"],
  datasets: [
    {
      label: "Weight Progress",
      display: false,
      data: [75, 74, 73.5, 73, 73],
      borderColor: "#f86b5b",
      color: "#018767",
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    y: {
      ticks: {
        color: "#b4b4b4",
      },
      min: 70,
      max: 78,
    },
    x: {
      ticks: {
        color: "#b4b4b4",
      },
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    title: {
      display: true,
      text: "Weight Progress",
      color: "#272727",
      align: "start",
      font: {
        size: 14,
        weight: 500,
      },
      padding: {
        top: 5,
        bottom: 0,
      },
    },
    subtitle: {
      display: true,
      text: "Absolute",
      color: "#b4b4b4",
      align: "start",
      font: {
        size: 12,
        weight: 500,
      },
      padding: {
        top: 2,
        bottom: 30,
      },
    },
    legend: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
};

const subtitleLine = {
  id: "subtitleLine",
  afterDraw(chart) {
    const { ctx, chartArea } = chart;
    console.log(chart);
    const subtitle = chart.config.options.plugins.subtitle;

    if (subtitle.display) {
      const paddingBottom = subtitle.padding.bottom / 1.3;
      const subtitleYPosition = chart.titleBlock.height + paddingBottom;

      ctx.save();
      ctx.strokeStyle = "#018767";
      ctx.beginPath();
      ctx.moveTo(0, subtitleYPosition);
      ctx.lineTo(chartArea.right, subtitleYPosition);
      ctx.stroke();
      ctx.restore();
    }
  },
};
const WeightChart = () => {
  return (
    <div className="chart-container">
      <Line data={data} options={options} plugins={[subtitleLine]} />
    </div>
  );
};

export default WeightChart;

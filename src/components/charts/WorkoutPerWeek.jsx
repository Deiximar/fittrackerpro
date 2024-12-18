import { Bar } from "react-chartjs-2";
import "./_WorkoutPerWeek.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  SubTitle,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  SubTitle,
  Tooltip,
  Legend
);

const data = {
  labels: ["12/08", "19/08", "28/08", "04/09", "11/09"],
  datasets: [
    {
      label: "Workout Per Week",
      display: false,
      data: [4, 3, 3, 4, 5],
      backgroundColor: "#F86B5B",
      barThickness: 15,
      borderRadius: 4,
      borderSkipped: false,
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    y: {
      border: {
        display: false,
      },
      ticks: {
        color: "#b4b4b4",
        display: false,
      },
      min: 0,
      max: 5,
      grid: {
        drawTicks: false,
        drawBorder: false,
      },
    },

    x: {
      ticks: {
        color: "#b4b4b4",
        padding: -3,
      },
      grid: {
        display: false,
        drawBorder: false,
      },
    },
  },
  plugins: {
    title: {
      display: true,
      text: "Workout Per Week",
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
      text: "Activity",
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
  layout: {
    padding: 0,
  },
  // elements: {
  //   point: {
  //     radius: 0,
  //   },
  // },
};

const subtitleLine = {
  id: "subtitleLine",
  afterDraw(chart) {
    const { ctx, chartArea } = chart;
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

const WorkoutPerWeek = () => {
  return (
    <div className="workout-chart-container">
      <Bar data={data} options={options} plugins={[subtitleLine]} />
    </div>
  );
};

export default WorkoutPerWeek;

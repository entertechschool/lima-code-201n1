const ctx = document.getElementById("myChart");

let chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Lab 01", "Lab 02", "Lab 03", "Lab 04", "Lab 05", "Lab 06"],
    datasets: [
      {
        label: "Notas de Ricardo",
        data: [12, 19, 3, 5, 2],
        borderWidth: 1,
      },
      {
        label: "Notas de Omar",
        data: [15, 9, 3, 6, 3, 2],
        borderWidth: 1,
      },
    ],
  },
  options: {
    // indexAxis: "x",
    scales: {
      y: {
        beginAtZero: true,
        // max: 100,
      },
    },
  },
});

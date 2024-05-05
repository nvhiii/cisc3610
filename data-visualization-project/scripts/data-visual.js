// Bar chart
new Chart(document.getElementById("bar-chart"), {
  type: "horizontalBar",
  data: {
    labels: [
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
    ],
    datasets: [
      {
        label: "Percentage of Market Share",
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
        ],
        data: [
          0.05, 0.1, 0.25, 0.3, 0.5, 0.4, 0.6, 0.8, 1.6, 1.7, 1.8, 3.6, 7.2,
        ],
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Electric Car Sales - Percentage of Market Share (Nahi Khan)",
    },
  },
});

// source: https://www.nytimes.com/2023/10/19/learning/whats-going-on-in-this-graph-oct-25-2023.html

new Chart(document.getElementById("doughnut-chart"), {
  type: "doughnut",
  data: {
    labels: ["Homelessness", "War", "Money", "Climate Change", "Other"],
    datasets: [
      {
        label: "Percentage of 4th Graders",
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
        ],
        data: [42, 31, 4, 17, 6],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "What Problems Do Children Want Solved? (Nahi Khan)",
    },
  },
});

// source: https://www.nytimes.com/2024/03/07/learning/whats-going-on-in-this-graph-march-13-2024.html

const chartLabels = ['Canada', 'United States', 'United Kingdom', 'Australia', 'New Zealand'];

const chartData = {
    labels: chartLabels,
    datasets: [
        {
            label: 'Male',
            backgroundColor: 'rgb(239,36,18)',
            borderColor: 'rgb(239, 36, 18)',
            data: [35, 10, 5, 2, 20]
        },
        {
            label: 'Female',
            backgroundColor: 'rgb(99,138,255)',
            borderColor: 'rgb(99,138,255)',
            data: [25, 15, 9, 8, 30]
        }
    ]
};

const chartConfig = {
    type: 'bar',
    data: chartData,
    options: {}
};

let chartID = document.getElementById("barChart");
let chart   = new Chart(chartID, chartConfig);

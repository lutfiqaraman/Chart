const labels = ['January', 'February', 'March', 'April', 'May', 'June',];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const chartConfig = {
    type: 'bar',
    data,
    options: {}
};

let chartID = document.getElementById("barChart");
let chart = new Chart(chartID, chartConfig);

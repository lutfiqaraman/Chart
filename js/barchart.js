const chartLabels = ['Canada', 'United States', 'United Kingdom', 'Australia', 'New Zealand', 'Russia'];

const chartData = {
    labels: chartLabels,
    datasets: [
        {
            label: 'Male',
            backgroundColor: 'rgb(239,36,18)',
            borderColor: 'rgb(239, 36, 18)',
            data: [18818000, 163359000, 33183000, 12775000, 2466000, 66919000]
        },
        {
            label: 'Female',
            backgroundColor: 'rgb(99,138,255)',
            borderColor: 'rgb(99,138,255)',
            data: [19097000, 166781000, 33975000, 12878000, 2552000, 77460000]
        }
    ]
};

const chartConfig = {
    type: 'bar',
    data: chartData,
    options: {
        plugins: {
            title: {
                display: true,
                padding: true,
                fullSize: true,
                font: {
                    size: 21,
                    weight: 'bold'
                },
                text: 'Gender ratio in millions'
            },
            tooltip: {
                mode: 'index',
                intersect: true,
                callbacks: {
                    label: function (context) {
                        let label = context.dataset.label || '';

                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            let roundedNumber = Math.round((context.parsed.y / 1e6) * 10) / 10;
                            label += roundedNumber + 'M';
                        }
                        return label;
                    }
                }
            }
        },
        scales: {
            x: {
                title: {
                  text: 'Countries',
                  display: true
                },
                grid: {
                    tickColor: 'red'
                }
            },
            y: {
                title: {
                    text: 'Male to female ratio in millions',
                    display: true
                },
                ticks: {
                    // Include 'M' in the ticks
                    callback: function(value, index, values) {
                        return  value / 1e6 + 'M';
                    }
                }
            }
        },
        animation: {
            duration: 3000,
            easing: 'easeInOutBounce'
        },
        layout: {
            padding: {
                top: 25,
                right:50,
                left: 50
            }
        },
        responsive: true
    }
};

let chartID = document.getElementById("barChart");
let chart   = new Chart(chartID, chartConfig);

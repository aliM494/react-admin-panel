import Chart from "chart.js/auto";

export const setDashboardChart = (labels, datapoints) => {

    const data = {
        labels: labels,
        datasets: [
            {
                label: "فروش ماه",
                data: datapoints,
                borderColor: "#0062ff",
                fill: true,
                cubicInterpolationMode: "monotone",
                tension: 0.4,
            },
        ],
    };

    const config = {
        type: "line",
        data: data,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: "نمودار فروش یک سال گذشته",
                },
            },
            interaction: {
                intersect: false,
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        // text: 'زمان'
                    },
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: " میلیون تومان",
                    },
                    // suggestedMin: -10,
                    // suggestedMax: 200
                },
            },
        },
    };

    const ctx = document.getElementById("Chart").getContext("2d");

    if (Chart.getChart(ctx)) {

        Chart.getChart(ctx).destroy();
    }

    new Chart(ctx, config);
}
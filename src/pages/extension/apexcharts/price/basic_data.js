export default {
    series: [
        {
            data: [
                {
                    x: new Date(1538778600000),
                    y: [150, 170, 50, 100],
                },
                {
                    x: new Date(1538780400000),
                    y: [200, 400, 170, 330],
                },
                {
                    x: new Date(1538782200000),
                    y: [330, 340, 250, 280],
                },
                {
                    x: new Date(1538784000000),
                    y: [300, 330, 200, 320],
                },
                {
                    x: new Date(1538785800000),
                    y: [320, 450, 280, 350],
                },
                {
                    x: new Date(1538787600000),
                    y: [300, 350, 80, 250],
                },
                {
                    x: new Date(1538789400000),
                    y: [200, 330, 170, 300],
                },
                {
                    x: new Date(1538791200000),
                    y: [200, 220, 70, 130],
                },
                {
                    x: new Date(1538793000000),
                    y: [220, 270, 180, 250],
                },
                {
                    x: new Date(1538794800000),
                    y: [200, 250, 80, 100],
                },
                {
                    x: new Date(1538796600000),
                    y: [150, 170, 50, 120],
                },
                {
                    x: new Date(1538798400000),
                    y: [110, 450, 10, 420],
                },
                {
                    x: new Date(1538800200000),
                    y: [400, 480, 300, 320],
                },
                {
                    x: new Date(1538802000000),
                    y: [380, 480, 350, 450],
                },
            ],
        },
    ],

    chartOptions: {
        chart: {
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            tooltip: {
                enabled: true,
            },
            // opposite: isRtl,
        },
        grid: {
            xaxis: {
                lines: {
                    show: true,
                },
            },
        },
        legend: {
            show: false,
        },
        plotOptions: {
            candlestick: {
                colors: {

                },
            },
            bar: {
                columnWidth: '40%',
            },
        },
    },
}



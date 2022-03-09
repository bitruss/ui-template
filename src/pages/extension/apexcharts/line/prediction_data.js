export default {

    series: [{
        name: 'Sales',
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
    }],

    options: {

        forecastDataPoints: {
            count: 7
        },
        stroke: {
            width: 5,
            curve: 'straight' //or 'smooth'
        },

        colors: ["#db9a1f","#db9a1f","#db9a1f"],

        xaxis: {  
            categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
            tickAmount: 5,
            
        },
        title: {
            text: 'Forecast',
            align: 'left',
            style: {
                fontSize: "16px",
                color: '#666'
            }
        },
        // yaxis: {
        //     min: -10,
        //     max: 40
        // }
    }
}
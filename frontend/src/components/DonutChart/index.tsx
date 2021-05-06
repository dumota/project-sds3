import Chart from 'react-apexcharts';

const DonutChart = () => {

    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }
    
    const options = {
        legend: {
            show: true
        }
    }
    return (
        //os ... deixa claro pro react que vc pode por mais coisas
        //o nome mock se usa muito quando estamos fazendo dados de mentira
        <Chart 
            options={{...options, labels: mockData.labels}}
            series={mockData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;
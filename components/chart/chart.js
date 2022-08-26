import styles from './chart.module.css'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Chart = (props) => {
    const { checked } = props;
    console.log(checked);

    const options = {
        chart: {
            type: 'line'
        },
        title: {
            text: '日本の都道府県別人口図'
        },
        subtitle: {
            text: 'Source: RESAS API'
        },
        yAxis: {
            title:
            {
                text: '人口数'
            }
        },
        xAxis: {
            title:
            {
                text: '年'
            }
        },
        series: [
            {
                data: [1, 2, 1, 4, 3, 6],
                name: "Tokyo"
            },
            {
                data: [6, 5, 4, 3, 2, 1],
            }
        ]
    };

    return (
        <div className={styles.container}>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}

export default Chart
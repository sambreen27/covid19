import React, {useState, useEffect} from 'react';
import { fetchDailyData} from '../../api';
import { Line, Bar} from 'react-chartjs-2';
import styles from './Charts.module.css'

const Charts = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
        },[]);


    const lineChart = (
      dailyData.length
          ? (
              <Line
                data ={{
          labels: dailyData.map(({ date }) => date),
          datasets:[{
              data: dailyData.map(({ confirmed }) => confirmed),
              label: 'Infected',
              borderColor: '#6b72cd',
              fill: true,
          },{
              data: dailyData.map(({ deaths }) => deaths),
              label: 'Deaths',
              borderColor: '#ab0909',
              fill: true,
          }],
                }}
        />) : null
    );

const barChart =(
    confirmed
    ? (
        <Bar
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets:[{
                    label: 'People',
                    backgroundColor:[
                        'rgb(0, 13, 255)',
                        'rgb(16, 152, 16)',
                        'rgb(255, 0, 0)',
                    ],
                    data:[ confirmed.value, recovered.value, deaths.value]
                }]
            }}
            options={{
                legend:{display: false},
                title:{display: true, text:`${country}'s Covid-19 Live Data`}
        }}
        />
        ): null
);
    return (
        <div className={styles.container}>
            { country ? barChart : lineChart }
        </div>
    )
}
export default Charts;

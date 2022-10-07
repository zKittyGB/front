import ApiData from "./Axios"
import { useEffect, useState } from 'react';

function FormatData(score) {
    const [user, setUserData] = useState([]);
    const [activity, setActivityData] = useState([]);
    const [average, setAverageData] = useState([]);
    const [perf, setPerfData] = useState([]);
    const [axiosDone, setAxiosDone] = useState([false]);

    async function getApiData(){
        try{
            const dataUser = await ApiData.get("/user/18");
            const dataActivity = await ApiData.get("/user/18/activity");
            const dataAverage = await ApiData.get("/user/18/average-sessions");
            const dataPerf = await ApiData.get("/user/18/performance");
            setUserData(dataUser.data.data)
            setActivityData(dataActivity.data.data)
            setAverageData(dataAverage.data.data)
            setPerfData(dataPerf.data.data)
            setAxiosDone(true)
        }
        catch(err){
            console.log(err)
        }    
    }
    useEffect(() => {getApiData();}, []);
    if(axiosDone === true){
        //Array for radialChart
        const dataRadial = [
            {
              name: 'objectif',
              value: `${user.score || user.todayScore}`*100,
              fill: '#FF0000',
            },
        ];
        //Array for BarChart
        const dataBarChart=[]
        activity.sessions.forEach((newActivity)=>{
            dataBarChart.push({day:newActivity.day.substr(8),"Poids (kg)":newActivity.kilogram, "calories brûlées (kCal)":newActivity.calories})
        })
        //Array for LineChart
        const dataLineChart=[]
        average.sessions.forEach((newAverage)=>{
            dataLineChart.push({day:newAverage.day,sessionLength:newAverage.sessionLength})
        })
        //Array for RadarChart
        const dataRadarChart=[
            {
              "kind": perf.kind[1],
              "A": perf.data[0].value,
              "fullMark": 150
            },
            {
              "kind": perf.kind[2],
              "A": perf.data[1].value,
              "fullMark": 150
            },
            {
              "kind": perf.kind[3],
              "A": perf.data[2].value,
              "fullMark": 150
            },
            {
              "kind": perf.kind[4],
              "A": perf.data[3].value,
              "fullMark": 150
            },
            {
              "kind": perf.kind[5],
              "A": perf.data[4].value,
              "fullMark": 150
            },
            {
              "kind": perf.kind[6],
              "A": perf.data[5].value,
              "fullMark": 150
            }
          ]
        return ([dataRadial, user, dataBarChart, dataLineChart,dataRadarChart])
    }
    
}

export default FormatData
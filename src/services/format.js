import ApiData from "./axios"

//get user id
let params = window.location.href
params = params[params.length-2]+params[params.length-1]
if(params !== "12" && params !== "18"){
  params = 12
}
//function to format data for each categorie
async function FormatData() {
  let user = "";
  let activity = "";
  let average ="";
  let perf ="";
  //function to call axios request
  async function getApiData(){
    try{
      const dataUser = await ApiData.get(`/user/${params}`);
      const dataActivity = await ApiData.get(`/user/${params}/activity`);
      const dataAverage = await ApiData.get(`/user/${params}/average-sessions`);
      const dataPerf = await ApiData.get(`/user/${params}/performance`);
      user=dataUser.data.data
      activity=dataActivity.data.data
      average=dataAverage.data.data
      perf=dataPerf.data.data
      const dataRadial= getDataRadial()
      const dataBarChart=getDataBarChart()
      const dataLineChart=getDataLineChart()
      const dataRadar=getDataRadarChart()
      return ([dataRadial,user, dataBarChart, dataLineChart, dataRadar])
    }
    catch(err){
      console.log(err)
    }
  }
  const apiData = await getApiData()
  
  function getDataRadial(){
    //Array for radialChart
    const dataRadial = [
      {
        name: 'objectif',
        value: `${user.score || user.todayScore}`*100,
        fill: '#FF0000',
      },
    ];
    return dataRadial
  }
   
  function getDataBarChart(){
    //Array for BarChart
    const dataBarChart=[]
    activity.sessions.forEach((newActivity)=>{
      dataBarChart.push({day:newActivity.day.substr(8),"Poids (kg)":newActivity.kilogram, "calories brûlées (kCal)":newActivity.calories})
    })
    return dataBarChart
  }

  function getDataLineChart(){
    //Array for LineChart
    const dataLineChart=[
      {
        "day": "L",
        "sessionLength": "",
      },
      {
        "day": "M",
        "sessionLength": "",
      },
      {
        "day": "M",
        "sessionLength": "",
      },
      {
        "day": "J",
        "sessionLength": "",
      },
      {
        "day": "V",
        "sessionLength": "",
      },
      {
        "day": "S",
        "sessionLength": "",
      },
      {
        "day": "D",
        "sessionLength": "",
      },
    ]
    //Send sessionLength in the array
    average.sessions.forEach((newAverage,i)=>{
      dataLineChart[i].sessionLength=newAverage.sessionLength
    })
    return dataLineChart
  }

  function getDataRadarChart(){
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
    return dataRadarChart
  }
  return apiData
}
    
export default FormatData
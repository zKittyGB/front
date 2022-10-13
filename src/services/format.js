import ApiData from "./axios"

//get user id
let params = window.location.href
params = params[params.length-2]+params[params.length-1]
if(params !== "12" && params !== "18"){
  params = 12
}
/**
 * function that format all user's data.
 * @param {string} user - var empty whom will use to stock user's informations datas usefull to the chart
 * @param {string} activity - var empty whom will use to stock user's activities datas usefull to the chart
 * @param {string} average - var empty whom will use to stock user's average datas usefull to the chart
 * @param {string} perf - var empty whom will use to stock user's performances datas usefull to the chart
*/
async function FormatData() {
  let user = "";
  let activity = "";
  let average ="";
  let perf ="";
/**
 * function that call Axios request and return them
 * @param {object} dataUser - stock user's informations datas
 * @param {object} dataActivity - stock user's activities datas
 * @param {object} dataAverage - stock user's average datas
 * @param {object} dataPerf - stock user's performances datas
 * @param {array} dataRadial -  stock user's formated datas
 * @param {array} dataBarChart - stock user's formated activities datas
 * @param {array} dataLineChart - stock user's formated average datas
 * @param {array} dataRadar - stock user's formated perfomances datas
*/
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
  /**
    * function that format user's datas for the radialChart
    * @param {array} dataRadial - stock formated user's informations datas
  */
  function getDataRadial(){
    const dataRadial = [
      {
        name: 'objectif',
        value: `${user.score || user.todayScore}`*100,
        fill: '#FF0000',
      },
    ];
    return dataRadial
  }
  /**
    * function that format activities datas for the barChart
    * @param {array} dataBarChart - stock formated activities datas
  */   
  function getDataBarChart(){
    //Array for BarChart
    const dataBarChart=[]
    activity.sessions.forEach((newActivity)=>{
      dataBarChart.push({day:newActivity.day.substr(8),"Poids (kg)":newActivity.kilogram, "calories brûlées (kCal)":newActivity.calories})
    })
    return dataBarChart
  }
  /**
    * function that format average datas for the lineChart
    * @param {array} dataLineChart - stock formated average datas
  */   
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
  /**
    * function that format performances datas for the lineChart
    * @param {array} dataRadarChart - stock formated performances datas
  */   
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
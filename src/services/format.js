import ApiData from "./axios"

class FormatDatas {
  constructor(user,activity, average, perf){
    this.user=user
    this.activity=activity
    this.average=average
    this.perf=perf
  }

  getDataRadial(){
    const dataRadial = [
      {
        name: 'objectif',
        value: `${this.user.score || this.user.todayScore}`*100,
        fill: '#FF0000',
      },
    ];
    return dataRadial
  }

  getDataBarChart(){
    //Array for BarChart
    const dataBarChart=[]
    this.activity.sessions.forEach((newActivity)=>{
      dataBarChart.push({day:newActivity.day.substr(8),"Poids (kg)":newActivity.kilogram, "calories brûlées (kCal)":newActivity.calories})
    })
    return dataBarChart
  }
  getDataLineChart(){
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
    this.average.sessions.forEach((newAverage,i)=>{
      dataLineChart[i].sessionLength=newAverage.sessionLength
    })
    return dataLineChart
  }

  getDataRadarChart(){
    //Array for RadarChart
    const dataRadarChart=[
      {
        "kind": this.perf.kind[1],
        "A": this.perf.data[0].value,
        "fullMark": 150
      },
      {
        "kind": this.perf.kind[2],
        "A": this.perf.data[1].value,
        "fullMark": 150
      },
      {
        "kind": this.perf.kind[3],
        "A": this.perf.data[2].value,
        "fullMark": 150
      },
      {
        "kind": this.perf.kind[4],
        "A": this.perf.data[3].value,
        "fullMark": 150
      },
      {
        "kind": this.perf.kind[5],
        "A": this.perf.data[4].value,
        "fullMark": 150
      },
      {
        "kind": this.perf.kind[6],
        "A": this.perf.data[5].value,
        "fullMark": 150
      }
    ]
    return dataRadarChart
  }
}

//get user id
let params = window.location.href
params = params[params.length-2]+params[params.length-1]
if(params !== "12" && params !== "18"){
  params = 12
}
/**
 * function that format all user's data.
*/
async function FormatData() {
  let user = "";
  let activity = "";
  let average ="";
  let perf ="";
/**
 * function that call Axios request and return them
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
      const formatDatas = new FormatDatas(user, activity,average,perf)

      const dataRadial= formatDatas.getDataRadial()
      const dataBarChart= formatDatas.getDataBarChart()
      const dataLineChart=formatDatas.getDataLineChart()
      const dataRadar=formatDatas.getDataRadarChart()
      return ([dataRadial,user, dataBarChart, dataLineChart, dataRadar])
    }
    catch(err){
      console.log(err)
    }
  }
  const apiData = await getApiData()

  return apiData
}
    
export default FormatData
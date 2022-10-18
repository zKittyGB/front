import "../../css/chart/RadarChart.css"
import { RadarChart, PolarGrid, PolarAngleAxis, Radar} from 'recharts';
import PropTypes from 'prop-types'

//ShowRadarChart PropTypes declaration
ShowRadarChart.propTypes ={ 
  dataRadar: PropTypes.array
}
/**
  * function that create the radarChart
  * @param {object} dataRadar - contains the datas imported from format.js
*/   
function ShowRadarChart(dataRadar) {
  const data = dataRadar.dataRadar
  //section to create RadarChart  
  const renderRadarChart = (
    <div className="body-section-info-chart-group-radarchart">
      <RadarChart outerRadius={80} width={258} height={263} data={data}>
        <PolarGrid radialLines={false} polarRadius={[0,10,20,40,60]}/>
        <PolarAngleAxis dataKey="kind" stroke="white" tickLine={false}  tick={{ fontSize: 12 }} />
        <Radar name="Mike" dataKey="A"  fill="#FF0101B2" fillOpacity={0.7} />
      </RadarChart>
    </div>
  )
  return renderRadarChart
}

export default ShowRadarChart
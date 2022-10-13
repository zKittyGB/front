import "../../css/chart/LineChart.css"
import { LineChart, Line, XAxis, Tooltip} from 'recharts';
import PropTypes from 'prop-types'

//ShowLineChart PropTypes declaration
ShowLineChart.propTypes ={ 
  basicObject: PropTypes.object,
  dataLine: PropTypes.array
}
/**
  * function that create the lineChart
  * @param {array} data - contains the datas whom be use to create the lineChart
  * @param {object} dataLine - contains the datas imported from format.js
  * @param {object} renderLineChart - contains the lineChart
*/   
function ShowLineChart(dataLine) {
  const data =dataLine.dataLine
  /**
    * function that customize the barChart tooltip
  */ 
  const CustomTooltip = ({ active, payload}) => {
    if(active && payload) {
      return (
        <div className="body-section-info-chart-group-linechart-customTooltip">
          <p className="label">{` ${payload[0].value} min`}</p>
        </div>
      );
    }    
    return null;
  };
  //CustomTooltip PropTypes declaration
  CustomTooltip.propTypes ={ 
    false: PropTypes.array,
    true:PropTypes.array
  }
  //section to create LineChart  
  const renderLineChart = (
    <div className="body-section-info-chart-group-linechart">
      <h3 className="body-section-info-chart-group-linechart-title">Durée moyenne des sessions</h3>
      <div className="body-section-info-chart-group-linechart-chart">  
        <LineChart width={258} height={205} data={data}>
          <defs>
            <linearGradient id="colorUv" >
            <stop offset="0%" stopColor="white" stopOpacity={0.1} />
            <stop offset={`${100}%`} stopColor="white" stopOpacity={1}/>
            </linearGradient>
          </defs>
          <Tooltip  content={<CustomTooltip />}  wrapperStyle={{outline:"none" }}/>
          <XAxis dataKey="day" tickLine={false}  axisLine={false} stroke="white" opacity={0.5}/>
          <Line type="monotone" dataKey="sessionLength" dot={false}  stroke="url(#colorUv)" strokeWidth={2} />
        </LineChart>
      </div>
    </div>
  )
  return renderLineChart
}

export default ShowLineChart
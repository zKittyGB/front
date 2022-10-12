import "../../css/chart/BarChart.css"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import PropTypes from 'prop-types'

//ShowBarChart PropTypes declaration
ShowBarChart.propTypes ={ 
  basicObject: PropTypes.object,
  dataBar: PropTypes.array
}
function ShowBarChart(dataBar) {
  console.log(dataBar)
  const data = dataBar.dataBar
  //function to customize the tooltip
  const CustomTooltip = ({ active, payload}) => {
    if (active && payload && payload.length) {
      return (
        <div className="body-section-info-chart-group-barchart-customTooltip">
          <p className="label0">{` ${payload[0].value}kg`}</p>
          <p className="label1">{`${payload[1].value}Kcal`}</p>
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
  //section to create BarChart
  const renderBarChart = (
    <div className="body-section-info-chart-barchart">
      <h3 className="body-section-info-chart-barchart-title">Activité quotidienne</h3>
      <BarChart width={835} height={320} data={data} barCategoryGap={54} barGap={8}>
        <CartesianGrid strokeDasharray="1 1" vertical={false}/>
        <XAxis dataKey="day" stroke="#9B9EAC" tickLine={false} axisLine={false}/>
        <YAxis yAxisId={1} orientation="right" dataKey="Poids (kg)" type="number" domain={['dataMin - 1', 'dataMax + 1']} stroke="#9B9EAC" tickCount={4} tickLine={false} axisLine={false}/>
        <YAxis yAxisId={2}  dataKey="calories brûlées (kCal)" type="number" domain={['dataMin - 100','dataMax + 100']} stroke="#9B9EAC" hide={true} tickLine={false} axisLine={false}/>
        <Tooltip  content={<CustomTooltip />}  wrapperStyle={{outline:"none" }}/>
        <Legend iconType="circle"  layout="horizontal" verticalAlign="top" align="right" height={80}/>
        <Bar yAxisId={1} dataKey="Poids (kg)"  fill="#282D30"  barSize={7}  radius={[8,8,0,0]} />
        <Bar yAxisId={2} dataKey="calories brûlées (kCal)" fill="#E60000"  barSize={7} radius={[8,8,0,0]} />
      </BarChart>
    </div>
  )
  return renderBarChart
}

export default ShowBarChart
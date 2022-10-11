import "../../css/chart/BarChart.css"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

function ShowBarChart(dataBar) {
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
  //section to create BarChart
  const renderBarChart = (
    <div className="body-section-info-chart-barchart">
      <h3 className="body-section-info-chart-barchart-title">Activité quotidienne</h3>
      <BarChart width={835} height={320} data={data}>
        <CartesianGrid strokeDasharray="1 1" vertical={false}/>
        <XAxis dataKey="day" stroke="#9B9EAC" tickLine={false} axisLine={false}/>
        <YAxis orientation="right" stroke="#9B9EAC" tickCount={3} tickLine={false} axisLine={false}/>
        <Tooltip  content={<CustomTooltip />}  wrapperStyle={{outline:"none" }}/>
        <Legend iconType="circle"  layout="horizontal" verticalAlign="top" align="right" height={80}/>
        <Bar dataKey="Poids (kg)" fill="#282D30"  barSize={7}  radius={[8,8,0,0]} />
        <Bar dataKey="calories brûlées (kCal)" fill="#E60000"  barSize={7} radius={[8,8,0,0]} />
      </BarChart>
    </div>
  )
  return renderBarChart
}

export default ShowBarChart
import "../../css/chart/RadialChart.css"
import { RadialBarChart, RadialBar, Legend} from 'recharts';
function ShowRadialChart(dataRadial) {
  const data =dataRadial.dataRadial
  const renderLegend = () => {
    return (
      <div className="body-section-info-chart-radialchart-score">
        <p className="body-section-info-chart-radialchart-score-percent">{data[0].value}%</p>    
        <p className="body-section-info-chart-radialchart-score-text">de votre objectif</p>    
      </div>
    );
  }
  const renderRadialChart = (
    <div className="body-section-info-chart-radialchart">
    <h3 className="body-section-info-chart-Radialchart-title">Score</h3>
      <RadialBarChart  width={258} height={205}  innerRadius="80%" barSize={10} data={data} startAngle={90} endAngle={90+((360/100)*(`${data[0].value}`))}>
        <RadialBar dataKey="value" cornerRadius={30 / 2}/>
        <Legend  content={renderLegend}  iconSize={0} layout="vertical" verticalAlign="middle"/>
      </RadialBarChart>
    </div>
  )  
  return renderRadialChart
}

export default ShowRadialChart
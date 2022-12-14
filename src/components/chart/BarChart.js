import "../../css/chart/BarChart.css"
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import PropTypes from 'prop-types'

//ShowBarChart PropTypes declaration
ShowBarChart.propTypes ={ 
  dataBar: PropTypes.array
}
/**
  * function that create the barChart
  * @param {object} dataBar - contains the datas imported from format.js
*/   
function ShowBarChart(dataBar)  {
  const data = dataBar.dataBar
  /** function that customize the barChart tooltip*/   
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
  
  return (      
    <div className="body-section-info-chart-barchart">
      <h3 className="body-section-info-chart-barchart-title">Activité quotidienne</h3>
      <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}barCategoryGap={54} barGap={8}>
        <CartesianGrid strokeDasharray="1 1" vertical={false}/>
        <XAxis dataKey="day" stroke="#9B9EAC" tickLine={false} axisLine={false}/>
        <YAxis yAxisId={1} orientation="right" dataKey="Poids (kg)" type="number" domain={['dataMin - 1', 'dataMax + 1']} stroke="#9B9EAC" tickCount={4} tickLine={false} axisLine={false}/>
        <YAxis yAxisId={2}  dataKey="calories brûlées (kCal)" type="number" domain={['dataMin - 100','dataMax + 100']} stroke="#9B9EAC" hide={true} tickLine={false} axisLine={false}/>
        <Tooltip  content={<CustomTooltip />}  wrapperStyle={{outline:"none" }}/>
        <Legend iconType="circle"  layout="horizontal" verticalAlign="top" align="right" height={80}/>
        <Bar yAxisId={1} dataKey="Poids (kg)"  fill="#282D30"  barSize={7}  radius={[8,8,0,0]} />
        <Bar yAxisId={2} dataKey="calories brûlées (kCal)" fill="#E60000"  barSize={7} radius={[8,8,0,0]} />
      </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ShowBarChart 
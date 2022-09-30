import "../../css/chart/LineChart.css"
import { LineChart, Line, XAxis, Tooltip} from 'recharts';
function ShowLineChart() {

    const data = [
        {
          "name": "L",
          "min": 20
        },
        {
          "name": "M",
          "min": 40
        },
        {
          "name": "M",
          "min": 51
        },
        {
          "name": "J",
          "min": 68
        },
        {
          "name": "V",
          "min": 55
        },
        {
          "name": "S",
          "min": 59
        },
        {
          "name": "D",
          "min": 38
        }
      ]

    const CustomTooltip = ({ active, payload}) => {
      if (active && payload) {
        return (
          <div className="body-section-info-chart-group-linechart-customTooltip">
            <p className="label">{` ${payload[0].value} min`}</p>
          </div>
        );
      }    
      return null;
    };

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
            <XAxis dataKey="name" tickLine={false}  axisLine={false} stroke="white" opacity={0.5}/>
            <Line type="monotone" dataKey="min" dot={false}  stroke="url(#colorUv)" strokeWidth={2} />
            </LineChart>
        </div>
      </div>
    )
    
    return renderLineChart
}

export default ShowLineChart
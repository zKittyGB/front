import "../../css/chart/BarChart.css"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
function ShowBarChart() {
    const data = [
        {
          "name": "Page A",
          "uv": 4000,
          "pv": 2400
        },
        {
          "name": "Page B",
          "uv": 3000,
          "pv": 1398
        },
        {
          "name": "Page C",
          "uv": 2000,
          "pv": 9800
        },
        {
          "name": "Page D",
          "uv": 2780,
          "pv": 3908
        },
        {
          "name": "Page E",
          "uv": 1890,
          "pv": 4800
        },
        {
          "name": "Page F",
          "uv": 2390,
          "pv": 3800
        },
        {
          "name": "Page G",
          "uv": 3490,
          "pv": 4300
        }
      ]

    const CustomTooltip = ({ active, payload}) => {
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip">
            <p className="label0">{` ${payload[0].value}kg`}</p>
            <p className="label1">{`${payload[1].value}Kcal`}</p>
          </div>
        );
      }    
      return null;
    };

    const renderBarChat = (
      <div className="barchart">
        <h3 className="barchart-title">Activité quotidienne</h3>
        <BarChart width={835} height={320} data={data}>
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="name" />
            <YAxis orientation="right"/>
            <Tooltip  content={<CustomTooltip />}  wrapperStyle={{outline:"none" }}/>
            <Legend iconType="circle"  layout="horizontal" verticalAlign="top" align="right" height={80}/>
            <Bar dataKey="pv" fill="#282D30"  barSize={7}  radius={[8,8,0,0]} />
            <Bar dataKey="uv" fill="#E60000"  barSize={7} radius={[8,8,0,0]} />
        </BarChart>
      </div>
    )
    
    return renderBarChat
}

export default ShowBarChart
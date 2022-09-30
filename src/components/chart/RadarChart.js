import "../../css/chart/RadarChart.css"
import { RadarChart, PolarGrid, PolarAngleAxis, Radar} from 'recharts';
function ShowRadarChart() {
  const data = [
    {
      "subject": "Math",
      "A": 120,
      "fullMark": 150
    },
    {
      "subject": "Chinese",
      "A": 98,
      "fullMark": 150
    },
    {
      "subject": "English",
      "A": 86,
      "fullMark": 150
    },
    {
      "subject": "Geography",
      "A": 99,
      "fullMark": 150
    },
    {
      "subject": "Physics",
      "A": 85,
      "fullMark": 150
    },
    {
      "subject": "History",
      "A": 65,
      "fullMark": 150
    }
  ]
    const renderRadarChart = (
      <div className="body-section-info-chart-group-radarchart">
        <RadarChart outerRadius={80} width={258} height={263} data={data}>
          <PolarGrid radialLines={false} polarRadius={[0,10,20,40,60]}/>
          <PolarAngleAxis dataKey="subject" stroke="white" tickLine={false}  tick={{ fontSize: 12 }} />
          <Radar name="Mike" dataKey="A"  fill="#FF0101B2" fillOpacity={0.7} />
        </RadarChart>
      </div>
    )
    
    return renderRadarChart
}

export default ShowRadarChart
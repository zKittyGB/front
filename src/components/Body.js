import "../css/Body.css"
import BarChart from "./chart/BarChart"
import LineChart from "./chart/LineChart"
import RadarChart from "./chart/RadarChart"
import RadialChart from "./chart/RadialChart"

function Body(){
    return(
        <div className="body-section">
            <div className="body-section-welcome">
                <div className="body-section-welcome-h1">
                    <h1 className="body-section-welcome-h1-welcome">Bonjour</h1>
                    <h1 className="body-section-welcome-h1-name"> Thomas</h1>
                </div>
                <p className="body-section-welcome-p">Félicitation ! Vous avez explosé vos objectifs hier 👏 </p>
            </div>
            <div className="body-section-info">
                <div className="body-section-info-chart">  
                    <BarChart/>
                    <div className="body-section-info-chart-group">   
                        <LineChart/>
                        <RadarChart/>
                        <RadialChart/>
                    </div>
                </div>
                <div className="body-section-info-card">

                </div>
            </div>
        </div>
    )
}

export default Body
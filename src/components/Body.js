import "../css/Body.css"
import BarChart from "./chart/BarChart"
import LineChart from "./chart/LineChart"

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
            <div className="body-section-chart">  
                <div className="body-section-chart-barchart">
                    <BarChart/>
                </div>   
                <div className="body-section-chart-linechart">   
                    <LineChart/>
                </div>
            </div>
        </div>
    )
}

export default Body
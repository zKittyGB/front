import "../css/Body.css"
import BarChart from "./chart/BarChart"
import LineChart from "./chart/LineChart"
import RadarChart from "./chart/RadarChart"
import RadialChart from "./chart/RadialChart"
import Card from "./Card"
import Calories from "../assets/calories-icon.png"
import Proteins from "../assets/proteins-icon.png"
import Carbohydrates from "../assets/carbohydrates-icon.png"
import Lipidiques from "../assets/lipidiques-icon.png"
import { useEffect, useState } from 'react';
import Format from "../services/format"

 function Body(){
    const [format, setFormat] = useState();
    //function get user data 
    async function getFormat(){
        const apiDataFormat = await Format()
        setFormat(apiDataFormat)
    }
    useEffect(() => {getFormat();}, []);
    //verification about user data existing
    if(format !== undefined){
        //storage of datas
        const formatDataRadial = format[0]
        const datanutrient = format[1].keyData
        const formatDataBar = format[2]
        const formatDataLine = format[3]
        const formatDataRadar = format[4]
        return(
            <div className="body-section">
                <div className="body-section-welcome">
                    <div className="body-section-welcome-h1">
                        <h1 className="body-section-welcome-h1-welcome">Bonjour</h1>
                        <h1 className="body-section-welcome-h1-name"> {`${format[1].userInfos.firstName}`}</h1>
                    </div>
                    <p className="body-section-welcome-p">Félicitation ! Vous avez explosé vos objectifs hier 👏 </p>
                </div>
                <div className="body-section-info">
                    {/* section of all recharts*/}
                    <div className="body-section-info-chart">  
                        <BarChart dataBar={formatDataBar}/>
                        <div className="body-section-info-chart-group">   
                            <LineChart dataLine={formatDataLine}/>
                            <RadarChart dataRadar={formatDataRadar}/>
                            <RadialChart dataRadial={formatDataRadial}/>
                        </div>
                    </div>
                    {/* section cards for each nutrient */}
                    <div className="body-section-info-cards">
                        <Card key={'Calories'} nutrient={'Calories'} datanutrient={datanutrient.calorieCount} icon={Calories} />                                                                 
                        <Card key={'Proteins'} nutrient={'Proteines'} datanutrient={datanutrient.proteinCount} icon={Proteins} />                                                                 
                        <Card key={'Carbohydrates'} nutrient={'Glucides'} datanutrient={datanutrient.carbohydrateCount} icon={Carbohydrates}  />                                                                                                                                  
                        <Card key={'Lipidiques'} nutrient={'Lipides'} datanutrient={datanutrient.lipidCount} icon={Lipidiques} />                                                                 
                    </div>
                </div>
            </div>
        )
    }
}

export default Body
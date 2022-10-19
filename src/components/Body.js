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
import React from "react"
import Format from "../services/format"
import Mock from "./chart/data/mock.json"
/**function that create the body of the apllication.*/
 function Body(){
    const [format, setFormat] = useState();
    let [clicCount, setClic]=useState(0)
    const [mock, setMock] = useState(false);
    /**function that switch between api or mock */
    function clic(){
        console.log(clicCount)
        if(clicCount === 0){
            setMock(true)
        }
        else if(clicCount === 1){
            setMock(false)
        }
        else if(clicCount >=2){
            clicCount = 0
            setMock(true)
        }
    }
    /** function that get data from format.js.*/
    async function getFormat(){
        const apiDataFormat = await Format()
        setFormat(apiDataFormat)
    }
    useEffect(() => {getFormat();}, []);
    //verification about user data existing
    if(format !== undefined){
        let name
        let formatDataRadial
        let datanutrient 
        let formatDataBar
        let formatDataLine 
        let formatDataRadar
        if(mock === false){
            //storage of datas from api
            name = format[1].userInfos.firstName
            formatDataRadial = format[0]
            datanutrient = format[1].keyData
            formatDataBar = format[2]
            formatDataLine = format[3]
            formatDataRadar = format[4]
        }
        else{
            //storage of datas from Mock
            name = Mock.nutrient.userInfos.firstName
            formatDataRadial = Mock.obj
            datanutrient = Mock.nutrient.keyData
            formatDataBar = Mock.activity
            formatDataLine = Mock.sessions
            formatDataRadar = Mock.perf    
        }

        return(
            <div className="body-section">
                <div className="body-section-welcome">
                    <div className="body-section-welcome-h1">
                        <h1 className="body-section-welcome-h1-welcome">Bonjour</h1>
                        <h1 className="body-section-welcome-h1-name"  onClick={()=>{clic(); setClic(clicCount+1)}}> {`${name}`}</h1>
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
                        <Card key={'Calories'} nutrient={'Calories'} unit={'kCal'} datanutrient={datanutrient.calorieCount} icon={Calories} />                                                                 
                        <Card key={'Proteins'} nutrient={'Proteines'} unit={'g'} datanutrient={datanutrient.proteinCount} icon={Proteins} />                                                                 
                        <Card key={'Carbohydrates'} nutrient={'Glucides'} unit={'g'} datanutrient={datanutrient.carbohydrateCount} icon={Carbohydrates}  />                                                                                                                                  
                        <Card key={'Lipidiques'} nutrient={'Lipides'} unit={'g'} datanutrient={datanutrient.lipidCount} icon={Lipidiques} />                                                                 
                    </div>
                </div>
            </div>
        )
    }
}

export default Body
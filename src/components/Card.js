import "../css/Card.css"

function Card(props){
    return(
        <div className='body-section-info-cards-card'>
            <img src={props.icon} alt={props.nutrient}/>
            <div className="body-section-info-cards-card-text">
                <p className="body-section-info-cards-card-text-quantity">{props.datanutrient}</p>
                <p className="body-section-info-cards-card-text-nutrient">{props.nutrient}</p>
            </div>
        </div>
    )    
}   

export default Card
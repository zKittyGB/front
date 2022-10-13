import "../css/Card.css"
import PropTypes from 'prop-types'

//Card PropTypes declaration
Card.propTypes ={ 
  nutrient:PropTypes.string,
  datanutrient:PropTypes.number,
  icon:PropTypes.string
}
 /**
 * function that create each nutrient card dynamically.
 * @param {object} props - contain all nutrients datas
 */
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
import "../../css/menu/MenuLeft.css"
import yoga from "../../assets/yoga.png"
import swimming from "../../assets/swimming.png"
import cycling from "../../assets/cycling.png"
import bodybuilding from "../../assets/bodybuilding.png"

function MenuLeft() {

    return(
        <div className="menu-left">
            <div className="menu-left-logoArea">
                <img src={yoga} alt ="yoga logo" className='Menu-left-logoArea-yoga'/>
                <img src={swimming} alt ="swimming logo" className='Menu-left-logoArea-swimming'/>
                <img src={cycling} alt ="cycling logo" className='Menu-left-logoArea-cycling'/>
                <img src={bodybuilding} alt ="bodybuilding logo" className='Menu-left-logoArea-bodybuilding'/>
            </div>
            <p className="copyright">Copyright, SportSee 2020</p>
        </div>
    )
}

export default MenuLeft
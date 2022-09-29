import "../css/menu/Logo.css"
import logo from "../assets/logo.png"

function Logo() {
    return(
        <div className="menu-top-logoArea">
            <img src={logo} alt ="SportSee logo" className='Menu-top-logoArea-logo'/>
        </div>
    )
}

export default Logo
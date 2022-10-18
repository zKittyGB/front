import "../../css/menu/MenuTop.css"
import Logo from "../Logo"
/** function that create the top menu area. */
function MenuTop() {
    return(
        <div className="menu-top">
            <div className="menu-top-logoArea">
                <Logo/>
            </div>
            <ul className="menu-top-ul">
                <li className="menu-top-ul-li-home">Accueil</li>
                <li className="menu-top-ul-li-profil">Profil</li>                    
                <li className="menu-top-ul-li-setting">Réglage</li>
                <li className="menu-top-ul-li-community">Communauté</li>
            </ul>
        </div>
    )
}

export default MenuTop
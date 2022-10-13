import "../css/page/Home.css"
import MenuTop from "../components/menu/MenuTop"
import MenuLeft from "../components/menu/MenuLeft"
import Body from "../components/Body"
/**
 * function that create the complete home page
*/
function Home(){
    return(
        <div className="main">
            <MenuTop/>
            <MenuLeft/>
            <Body/>
        </div>
    )
}

export default Home
import "../css/page/Home.css"
import MenuTop from "../components/menu/MenuTop"
import MenuLeft from "../components/menu/MenuLeft"
import Body from "../components/Body"

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
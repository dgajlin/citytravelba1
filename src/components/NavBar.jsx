// Menu de Navegacion por Categorias
import { Link } from "react-router-dom";
import "./styles/menu.css";

const NavBar = () => {
    return (
        <>
            <div className="contmenu">
                <ul>
                    <li><Link to="/category/0">CAPITAL FEDERAL</Link></li>
                    <li><Link to="/category/1">BUENOS AIRES (PBA)</Link></li>
                </ul>
            </div>                
        </>
    );
}

export default NavBar;
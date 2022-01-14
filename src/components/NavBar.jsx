import "../components/BerkshireSwash.css";
import "../components/estilos.css";
import "../components/menu.css";

const NavBar = () => {
    return (
        <>
            <div className="header">
                <div className="headercols">
                    <div className="contlogo">
                        <label className="logo" id="logo">City Travel BA</label>
                    </div>
                    <div className="contmenu">
                        <ul>
                            <li><a className="active" href="#">Inicio</a></li>
                            <li><a href="#">Historia</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                    </div>                    
                </div>
            </div>            
        </>
    );
}

export default NavBar;
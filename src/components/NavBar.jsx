import "./styles/menu.css";

const NavBar = () => {
    return (
        <>
            <div className="contmenu">
                <ul>
                    <li><a className="active" href="#">Inicio</a></li>
                    <li><a href="#">Historia</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>                
        </>
    );
}

export default NavBar;
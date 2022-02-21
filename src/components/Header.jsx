// Encabezado de la Pagina 
import "./styles/styles.css";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import CartWidget from "./CartWidget";

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="headercols">
                    <Logo />
                    <NavBar />
                    <CartWidget />
                </div>
            </div>            
        </>
    );
}

export default Header;
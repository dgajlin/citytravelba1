// Logo de la pagina web
import "./styles/BerkshireSwash.css";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <>
            <div className="contlogo">
                <label className="logo" id="logo"><Link to="/" className="linklogo">City Travel BA</Link></label>
            </div>
        </>
    );
}

export default Logo;                    
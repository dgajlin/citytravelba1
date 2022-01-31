// Listado de Destinos comecializables
import Item from "./Item";
import { Link } from "react-router-dom";

const ItemList = (props) => {
    return (
        <>
            <h3 className="nombreDestino">{props.title}</h3>
            <div className="fotoDestino">
                <img src={props.thumbnail} alt={props.title} className="imagenDestino" />
            </div>
            <div className="descDestino">
                <Item descripcion={props.descripcion} />
            </div>
            <div className="botonDestino"> 
                <Link to={`/item/${props.id}`}><button type="button" className="btnAgregar">Agregar</button></Link>
            </div>
        </>
    );
}

export default ItemList; 
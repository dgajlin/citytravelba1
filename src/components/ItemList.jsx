// Listado de Destinos comecializables
import Item from "./Item";
import { Link } from "react-router-dom";

const ItemList = (props) => {
    return (
        <>
            <h3 className="nombreDestino">{props.title}</h3>
            <div className="fotoDestino">
                <img src={props.thumbnail} alt={props.title} className="imageDestino" />
            </div>
            <div className="descDestino">
                <Item description={props.description} />
            </div>
            <div className="botonDestino"> 
                <Link to={`/item/${props.id}`}><button type="button" className="btnAdd">Agregar</button></Link>
            </div>
        </>
    );
}

export default ItemList; 
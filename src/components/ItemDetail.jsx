import Item from "./Item";
import ItemCount from "../components/ItemCount";

const ItemDetail = (props) => {
    return (
        <>
            <h3 className="nombreDestinoDetail">{props.title}</h3>
            <div className="fotoDestino">
                <img src={props.thumbnail} alt={props.title} className="imagenDestinoDetail" />
            </div>
            <div className="descDestinoDetail">
                <Item descripcion={props.descripcion} />
            </div>
            <div className="costoDetail">
                <p>
                    Costo: ${props.costo}/pasajero<br/>
                    Disponibilidad: {props.stock} pasajeros
                </p>
            </div>            
            <div className="disponibilidadDetail">
                <ItemCount inicial="1" 
                    maximo="20" 
                />         
            </div>
        </>
    );
}

export default ItemDetail;
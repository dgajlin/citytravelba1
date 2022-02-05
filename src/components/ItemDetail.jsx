// Detalle del Destino turistico
import ItemCount from "../components/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = (props) => {
    const [itemCount, setItemCount] = useState(0);

    const onAdd = (cantpasajeros) => {
        alert("Ha seleccionado " + cantpasajeros + " pasajeros");
        setItemCount(cantpasajeros);
    }

    return (
        <>
            {
                props && props.thumbnail
                ?
                <div>
                    <h3 className="nombreDestinoDetail">{props.title}</h3>
                    <div className="fotoDestino">
                        <img src={props.thumbnail} alt={props.title} className="imagenDestinoDetail" />
                    </div>
                    <div className="descDestinoDetail">
                        <p>
                            {props.descripcion}
                        </p>
                    </div>
                    <div className="costoDetail">
                        <p>
                            Salimos el: {props.fecha}<br/><br/>
                            Costo: ${props.costo}/pasajero<br/>
                            Disponibilidad: {props.stock} pasajeros
                        </p>
                    </div>
                    <div className="disponibilidadDetail">
                        {
                            itemCount === 0
                                ? <ItemCount maximo={props.stock} inicial={0} onAdd={onAdd} />
                                : <Link to='/cart'><button type="button" className="btnCheckout">Checkout</button></Link>
                        }
                    </div>
                </div>
                : <p>&nbsp;Espere un momento por favor...</p>
            }
        </>
    );
}

export default ItemDetail;
// Detalle del Destino turistico
import ItemCount from "../components/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../components/CartContext"

const ItemDetail = (item) => {
    const [itemCount, setItemCount] = useState(0);
    const elementos = useContext(CartContext);

    const onAdd = (cantpasajeros) => {
        setItemCount(cantpasajeros);
        elementos.addItem(item, cantpasajeros)        
    }

    return (
        <>
            {
                item && item.thumbnail
                ?
                <div>
                    <h3 className="nombreDestinoDetail">{item.title}</h3>
                    <div className="fotoDestino">
                        <img src={item.thumbnail} alt={item.title} className="imagenDestinoDetail" />
                    </div>
                    <div className="descDestinoDetail">
                        <p>
                            {item.descripcion}
                        </p>
                    </div>
                    <div className="costoDetail">
                        <p>
                            Salimos el: {item.fecha}<br/><br/>
                            Costo: ${item.costo}/pasajero<br/>
                            Disponibilidad: {item.stock} pasajeros
                        </p>
                    </div>
                    <div className="disponibilidadDetail">
                        {
                            itemCount === 0
                                ? <ItemCount maximo={item.stock} inicial={0} onAdd={onAdd} />
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
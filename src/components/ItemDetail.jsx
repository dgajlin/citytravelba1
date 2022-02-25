// Detalle del Destino turistico
import ItemCount from "../components/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemDetail = (item) => {
    const [itemCount, setItemCount] = useState(0);
    const elements = useContext(CartContext);

    const onAdd = (qty) => {
        setItemCount(qty);
        elements.addItem(item, qty)        
    }

    return (
        <>
            {
                item && item.thumbnail
                ?
                <div>
                    <h3 className="nameDestinoDetail">{item.title}</h3>
                    <div className="fotoDestino">
                        <img src={item.thumbnail} alt={item.title} className="imageDestinoDetail" />
                    </div>
                    <div className="descDestinoDetail">
                        <p>
                            {item.description}
                        </p>
                    </div>
                    <div className="priceDetail">
                        <p>
                            Salimos el: {item.date}<br/><br/>
                            Costo: ${item.price}/pasajero<br/>
                            Disponibilidad: {item.stock} pasajeros
                        </p>
                    </div>
                    <div className="disponibilidadDetail">
                        {
                            itemCount === 0
                                ? <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
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
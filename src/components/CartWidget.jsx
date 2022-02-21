// Contenedor del Carrito de Compras
import Carrito from "./images/carrito.jpg";
import { useContext } from 'react'
import { CartContext } from "../components/CartContext"
import { Link } from "react-router-dom";

const CartWidget = () => {
    const elementos = useContext(CartContext);

    // Obtengo la cantidad de Items del carrito
    let cantitems = 0;
    elementos.cartList.map(items => (
        cantitems += items.cantidad
    ))

    return (
        <>
            {
                cantitems > 0
                ?
                <div className="contcarrito">
                    <div className="imagen">
                        <Link to='/cart' style={{background: 'transparent'}}><img alt="Carrito" src={Carrito} className="imgCarrito" /></Link>
                    </div>
                    <div className="items">
                        <label className="cantdestinos" id="cantDestinos">{cantitems}</label>
                        <label className="lbldestinos">&nbsp;items</label>
                    </div>
                </div>
                :<div></div>
            }
        </>
    );
}

export default CartWidget;
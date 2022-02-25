// Contenedor del Carrito de Compras
import Carrito from "./images/cart.jpg";
import { useContext } from 'react'
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom";

const CartWidget = () => {
    const elements = useContext(CartContext);

    return (
        <>
            {
                elements.calcItemsQty() > 0
                ?
                <div className="contcart">
                    <div className="image">
                        <Link to='/cart' style={{background: 'transparent'}}><img alt="Carrito" src={Carrito} className="imgCarrito" /></Link>
                    </div>
                    <div className="items">
                        <label className="cantdestinos" id="cantDestinos">{elements.calcItemsQty()}</label>
                        <label className="lbldestinos">&nbsp;items</label>
                    </div>
                </div>
                :<div></div>
            }
        </>
    );
}

export default CartWidget;
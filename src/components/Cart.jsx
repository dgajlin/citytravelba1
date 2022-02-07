import { useContext } from 'react'
import { CartContext } from "../components/CartContext"

// Carrito de Compras
const Cart = () => {
    const elementos = useContext(CartContext);
    return (
        <>
            <div className="contVaciarCarrito">                
                {
                    elementos.cartList.length !== 0
                    ? <button type="button" className="btnCheckout" onClick={elementos.clear}>Vaciar Carrito</button>
                    : <div></div>
                }
            </div>

            {
                elementos.cartList.map(item => (
                    <div className="contenedor1">
                        <div className="columna1">
                            <h3 className="nombreDestinoCart">{item.title}</h3>
                            <div className="fotoDestino">
                                <img src={item.thumbnail} alt={item.title} className="imagenDestinoDetail" />
                            </div>                        
                            <button type="button" className="btnRemove" onClick={() => elementos.removeItem(item.id)}>Eliminar Destino</button>
                        </div>
                        <div className="columna2">
                            <div className="costoCart">
                                Costo: ${item.costo}/pasajero<br/>
                                Pasajeros: {item.cantidad}
                            </div>                        
                        </div>                                                    
                    </div>                    
                ))
            }
        </>
    );
}

export default Cart;
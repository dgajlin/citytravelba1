import { useContext } from 'react'
import { CartContext } from "../components/CartContext"
import { Link } from 'react-router-dom';

// Carrito de Compras
const Cart = () => {
    const elementos = useContext(CartContext);
 
    // Obtengo los Subtotales
    let subtotal = 0;
    elementos.cartList.map(item => (
        subtotal = subtotal + (item.costo * item.cantidad)
    ))

    return (
        <>
            <div className="contVaciarCarrito">               
                {
                    elementos.cartList.length !== 0
                    ? <div></div>
                    : <div>                        
                        <div className="carritoVacio">
                            <label className="lblCarritoVacio">El carrito de compras está vacio</label>
                        </div>
                        <div className="contContinuar">
                            <Link to='/'><button type="button" className="btnContinuar">Volver al Inicio</button></Link>
                        </div>                    
                      </div>
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
            {
                subtotal !== 0
                ? <div className="subtotal">
                    <div class="contResumen">
                        <label className="txtResumen">Resumen</label>
                    </div>
                    <label className="txtSubtotal">Subtotal: ${subtotal}</label><br/>
                    <label className="txtImpuestos">Impuestos: ${subtotal * 0.105}</label><br/>
                    <label className="txtImpuestos">Descuentos: -${subtotal * 0.105}</label><br/><br/>
                    <label className="txtTotal">Total: ${subtotal + (subtotal * 0.105) - (subtotal * 0.105)} </label>
                    <div className="contContinuar">
                        <Link to='/'><button type="button" className="btnContinuar">Continuar Comprando</button></Link>
                    </div>
                    <div className="contVaciar">
                        <button type="button" className="btnVaciar" onClick={elementos.clear}>Vaciar Carrito</button>
                    </div>
                    <div className="contTerminar">
                        <button type="button" className="btnComprar">Terminar Compra</button>
                    </div>
                 </div>
                : <div></div>
            }
        </>
    );
}

export default Cart;
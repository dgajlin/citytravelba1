// Carrito de Compras
import { useContext } from 'react'
import { CartContext } from "../context/CartContext"
import { Link } from 'react-router-dom';
import createOrder from "../utils/createOrder";

const Cart = () => {
    const elements = useContext(CartContext);
    
    return (
        <>
            <div className="contClearCart">               
                {
                    elements.cartList.length !== 0
                    ? <div></div>
                    : <div>                        
                        <div className="emptyCart">
                            <label className="lblEmptyCart">El carrito de compras está vacio</label>
                        </div>
                        <div className="contContinue">
                            <Link to='/'><button type="button" className="btnContinue">Volver al Inicio</button></Link>
                        </div>                    
                      </div>
                }
            </div>
            {
                elements.cartList.map(item => (                    
                    <div className="containerdest">
                        <div className="column1">
                            <h3 className="nameDestinoCart">{item.title}</h3>
                            <div className="fotoDestino">
                                <img src={item.thumbnail} alt={item.title} className="imageDestinoDetail" />
                            </div>                        
                            <button type="button" className="btnRemove" onClick={() => elements.removeItem(item.id)}>Eliminar Destino</button>
                        </div>
                        <div className="column2">
                            <div className="priceCart">
                                Costo: ${item.price}/pasajero<br/>
                                Pasajeros: {item.qty}   
                            </div>                        
                        </div>          
                    </div>                    
                ))
            }
            {
                elements.calcSubtotal() !== 0
                ? <div className="subtotal">
                    <div className="contResumen">
                        <label className="txtResumen">Resumen</label>
                    </div>
                    <label className="txtSubtotal">Subtotal: ${elements.calcSubtotal()}</label><br/>
                    <label className="txtTaxes">Impuestos: ${elements.calcTaxes()}</label><br/>
                    <label className="txtTaxes">Descuentos: -${elements.calcTaxes()}</label><br/><br/>
                    <label className="txtTotal">Total: ${elements.calcTotal()}</label>
                    <div className="contContinue">
                        <Link to='/'><button type="button" className="btnContinue">Seguir Comprando</button></Link>
                    </div>
                    <div className="contClear">
                        <button type="button" className="btnClear" onClick={elements.clearItems}>Vaciar Carrito</button>
                    </div>
                    <div className="contFinish">
                        <button type="button" className="btnBuy" onClick={createOrder(elements)}>Terminar Compra</button>
                    </div>
                 </div>
                : <div></div>
            }
        </>
    );
}

export default Cart;
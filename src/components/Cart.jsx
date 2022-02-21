import { useContext } from 'react'
import { CartContext } from "../components/CartContext"
import { Link } from 'react-router-dom';
import { increment, serverTimestamp, updateDoc, doc } from 'firebase/firestore'
import { db } from "../utils/firebaseConfig"
import createOrderInFirestore from '../utils/firebaseOrder';

// Carrito de Compras
const Cart = () => {
    const elementos = useContext(CartContext);

    const createOrder = () => {
        let order = {
            buyer: {
                name: 'Juan Perez',
                phone: '541141110000',
                email: 'jperez@mail.com'
            },
            items: elementos.cartList.map(item => ({
                id: item.idItem,
                costo: item.costo,
                title: item.title,
                stock: item.stock,
                cantidad: item.cantidad
            })),
            date: serverTimestamp(),
            total: elementos.calcularTotal()
        }

        // Creo la Orden y devuelvo el Order ID
        createOrderInFirestore(order)
            .then(result => alert("Su orden ha sido creada con exito\nOrder Id: " + result.id))
            .catch(error => console.log(error))

        // Decremento las cantidades
        elementos.cartList.forEach(async(elementos) => {
            const itemRef = doc(db, "destinos", elementos.id);
            await updateDoc(itemRef, {
                stock: increment(-elementos.cantidad)
            });
        });

        // Vacio el Carrito
        elementos.clear();
    }
    
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
                elementos.calcularSubtotal() !== 0
                ? <div className="subtotal">
                    <div className="contResumen">
                        <label className="txtResumen">Resumen</label>
                    </div>
                    <label className="txtSubtotal">Subtotal: ${elementos.calcularSubtotal()}</label><br/>
                    <label className="txtImpuestos">Impuestos: ${elementos.calcularImpuestos()}</label><br/>
                    <label className="txtImpuestos">Descuentos: -${elementos.calcularImpuestos()}</label><br/><br/>
                    <label className="txtTotal">Total: ${elementos.calcularTotal()}</label>
                    <div className="contContinuar">
                        <Link to='/'><button type="button" className="btnContinuar">Seguir Comprando</button></Link>
                    </div>
                    <div className="contVaciar">
                        <button type="button" className="btnVaciar" onClick={elementos.clear}>Vaciar Carrito</button>
                    </div>
                    <div className="contTerminar">
                        <button type="button" className="btnComprar" onClick={createOrder}>Terminar Compra</button>
                    </div>
                 </div>
                : <div></div>
            }
        </>
    );
}

export default Cart;
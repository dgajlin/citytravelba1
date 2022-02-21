import { createContext, useState } from 'react'
export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    // Funcion Verificacion de Destino en Carrito
    const isInCart = (item) => {
        let encontrado = cartList.find(destino => destino.idItem === item.id);
        return encontrado
    }

    // Funcion Agregar Destino
    const addItem = (item, cantidad) => {
        let destino = isInCart(item)
        if (destino === undefined) {
             setCartList([
                ...cartList,
                {
                    id: item.id,
                    idItem: item.idItem,                    
                    title: item.title,
                    thumbnail: item.thumbnail,
                    costo: item.costo,
                    stock: item.stock,
                    cantidad: cantidad
                }
            ]);
        } else {
            destino.cantidad += cantidad;
        }
    }

    // Funcion Vaciar Carrito
    const clear = () => {
        setCartList([])
    }
    
    // Funcion Remover Destino
    const removeItem = (id) => {
        setCartList(cartList.filter(item => item.idItem !== id))
    }
    
    const calcularSubtotal = () => {
        let subtotal = 0;
        cartList.map(item => (
            subtotal = subtotal + (item.costo * item.cantidad)
        ));
        return subtotal;
    }

    const calcularImpuestos = () => {
        return calcularSubtotal() * 0.105;
    }

    const calcularTotal = () => {
        return calcularSubtotal() + calcularImpuestos() - calcularImpuestos();
    }

    return (
        <CartContext.Provider value={{cartList, clear, removeItem, addItem, calcularSubtotal, calcularImpuestos, calcularTotal}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;

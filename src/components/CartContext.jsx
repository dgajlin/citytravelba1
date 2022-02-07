import { createContext, useState } from 'react'
export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    // Funcion Verificacion de Destino en Carrito
    const isInCart = (item) => {
        let encontrado = cartList.find(destino => destino.id === item.id);
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
        setCartList(cartList.filter(item => item.id !== id))
    }
    
    return (
        <CartContext.Provider value={{cartList, clear, removeItem, addItem}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;

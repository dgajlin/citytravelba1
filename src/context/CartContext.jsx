import { createContext, useState } from 'react'
export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    // Funcion Verificacion de Destino en Carrito
    const isInCart = (item) => {
        let destfound = cartList.find(destino => destino.id === item.id);
        return destfound
    }

    // Funcion Agregar Destino al Carrito
    const addItem = (item, qty) => {
        let destino = isInCart(item)
        if (destino === undefined) {
            setCartList([
                ...cartList,
                {
                    id: item.id,              
                    title: item.title,
                    thumbnail: item.thumbnail,
                    price: item.price,
                    stock: item.stock,
                    qty: qty
                }
            ]);
        } else {
            destino.qty += qty;
            setCartList([
                ...cartList
            ]);
        }
    }

    // Funcion Vaciar Carrito
    const clearItems = () => {
        setCartList([])
    }
    
    // Funcion Remover Destino
    const removeItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id))
    }
    
    // Funcion para Calculo de Subtotales
    const calcSubtotal = () => {
        let subtotal = 0;
        cartList.map(item => (
            subtotal += (item.price * item.qty)
        ));
        return subtotal;
    }

    // Funcion para Calculo de Impuestos
    const calcTaxes = () => {
        return parseInt(calcSubtotal() * 0.105);
    }

    // Funcion para Calculo de Totales
    const calcTotal = () => {
        return calcSubtotal() + calcTaxes() - calcTaxes();
    }

    // Funcion para cuenta de Items agregados al carrito
    const calcItemsQty = () => {
        let qtyitems = 0;
        cartList.map(items => (
            qtyitems += items.qty
        ));
        return qtyitems;
    }

    return (
        <CartContext.Provider value={{cartList, clearItems, removeItem, addItem, calcSubtotal, calcTaxes, calcTotal, calcItemsQty}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
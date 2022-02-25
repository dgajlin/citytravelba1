// Contador de Pasajeros que contratan la excursion hacia el Destino turistico
import React, { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [qty,setQty] = useState(parseInt(initial));
    
    // Funcion incrementar pasajeros
    const passengerAdd = () => {  
        if (qty < parseInt(stock)) 
            setQty(qty + 1);
    }
    
    // Funcion decrementar pasajeros
    const passengerSub = () => {        
        if (qty > parseInt(initial + 1))
            setQty(qty - 1);            
    }

    return (
        <>
            <div className="frmpassengers">
                <label className="lblpassengers">Cantidad de Pasajeros:</label><br />
                {
                    stock > 0
                    ? <button type="button" onClick={passengerSub} className="itempassengers">-</button>
                    : <button type="button" className="itempassengers" disabled>-</button>
                }
                <input type="text" value={qty} className="itempassengers" readOnly />
                {
                    stock > 0
                    ? <button type="button" onClick={passengerAdd} className="itempassengers">+</button>
                    : <button type="button" className="itempassengers" disabled>+</button>
                }
                {
                    qty > 0
                    ? <button type="button" className="btnAddCart" onClick={() => onAdd(qty)}>Agregar al Carrito</button>
                    : <button type="button" className="btnAddCart" disabled>Agregar al Carrito</button>
                }
            </div>
        </>
    );
}

export default ItemCount;
// Contador de Pasajeros que contratan la excursion hacia el Destino turistico
import React, {useState} from "react";

const ItemCount = ({maximo, inicial, onAdd}) => {
    const [cantpasajeros,setCantpasajeros] = useState(parseInt(inicial));
    
    // Funcion incrementar pasajero
    const PassengerAdd = () => {  
        if (cantpasajeros < parseInt(maximo)) 
            setCantpasajeros(cantpasajeros+1);
    }
    
    // Funcion decrementar pasajero
    const PassengerSub = () => {        
        if (cantpasajeros > parseInt(inicial+1))
            setCantpasajeros(cantpasajeros-1);            
    }

    return (
        <>
            <div className="frmpasajeros">
                <label className="lblPasajeros">Cantidad de Pasajeros:</label><br />
                {
                    maximo > 0
                    ? <button type="button" onClick={PassengerSub} className="itemPasajeros">-</button>
                    : <button type="button" className="itemPasajeros" disabled>-</button>
                }
                <input type="text" value={cantpasajeros} className="itemPasajeros" />
                {
                    maximo > 0
                    ? <button type="button" onClick={PassengerAdd} className="itemPasajeros">+</button>
                    : <button type="button" className="itemPasajeros" disabled>+</button>
                }
                {
                    cantpasajeros > 0
                    ? <button type="button" className="btnAddCarrito" onClick={() => onAdd(cantpasajeros)}>Agregar al Carrito</button>
                    : <button type="button" className="btnAddCarrito" disabled>Agregar al Carrito</button>
                }
            </div>
        </>
    );
}

export default ItemCount;
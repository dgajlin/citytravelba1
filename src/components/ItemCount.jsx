import React, {useState} from "react";

const ItemCount = (props) => {
    const [cantpasajeros,setCantpasajeros] = useState(parseInt(props.inicial));

    const PassengerAdd = () => {  
        if (cantpasajeros < parseInt(props.maximo)) 
            setCantpasajeros(cantpasajeros+1);
    }
    
    const PassengerSub = () => {        
        if (cantpasajeros > parseInt(props.inicial))
            setCantpasajeros(cantpasajeros-1);
    }

    return (
        <>
            <div className="frmpasajeros">
                <label className="lblPasajeros">Cantidad de Pasajeros:</label><br />
                <button type="button" onClick={PassengerSub} className="itemPasajeros">-</button>
                <input type="text" value={cantpasajeros} className="itemPasajeros" />
                <button type="button" onClick={PassengerAdd} className="itemPasajeros">+</button>                
                <button type="button" className="btnAddCarrito">Agregar al Carrito</button>
            </div>
        </>
    );
}

export default ItemCount;        
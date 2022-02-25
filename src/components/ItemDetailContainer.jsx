// Contenedor del Detalle del Destino turistico seleccionado 
import ItemDetail from "../components/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import firestoreFetchDetail from "../utils/firebaseFetchDetail";

const ItemDetailContainer = () => {
    const [destinos,setDestinos] = useState({});
    const urlParam = useParams();

    useEffect(() => {       
        firestoreFetchDetail(urlParam.id)
            .then((result) => setDestinos(result[0]))
            .catch(error => console.log(error))        
    },[urlParam.id])

    return (
        <>
            <ItemDetail key={destinos.id}
                        id={destinos.id}                        
                        description={destinos.description}
                        title={destinos.title}
                        date={destinos.date}
                        thumbnail={destinos.thumbnail} 
                        price={destinos.price}
                        stock={destinos.stock}
                        qty={destinos.qty}
            />
        </>
    );
}

export default ItemDetailContainer;
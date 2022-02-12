// Contenedor del Detalle del Destino turistico seleccionado 
import ItemDetail from "../components/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import firestoreFetchDetail from "../utils/firebaseFetchDetail";

const ItemDetailContainer = () => {
    const [destinos,setDestinos] = useState({});
    const urlParam = useParams();

    useEffect(() => {       
        firestoreFetchDetail(parseInt(urlParam.id))
            .then((result) => setDestinos(result[0]))
            .catch(error => console.log(error))        
    },[urlParam.id])

    return (
        <>
            <ItemDetail id={destinos.id}
                        descripcion={destinos.descripcion}
                        title={destinos.title}
                        fecha={destinos.fecha}
                        thumbnail={destinos.thumbnail} 
                        costo={destinos.costo}
                        stock={destinos.stock}
            />
        </>
    );
}

export default ItemDetailContainer;
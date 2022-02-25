// Contenedor del listado de Destinos comercializables
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import firestoreFetchList from "../utils/firebaseFetchList"

const ItemListContainer = () => {
    const [destinos,setDestinos] = useState([]);
    const urlParam = useParams();

    useEffect(() => {       
        firestoreFetchList(parseInt(urlParam.categoria))
            .then((result) => setDestinos(result))
            .catch(error => console.log(error))        
    },[urlParam.categoria])

    return (
        <>
            <div className="contenedor">  
                {       
                    destinos.length > 0
                    ? destinos.map((destino) =>
                        // Muestro los paquetes turisticos     
                        <div className="mainDestinos">
                            <ItemList key={destino.id}                                        
                                      id={destino.id}
                                      title={destino.title}
                                      thumbnail={destino.thumbnail}
                                      description={destino.description}
                                      price={destino.price}
                            />
                        </div>
                    )
                    : <p>&nbsp;Espere un momento por favor...</p>
                }
            </div>
        </>
    );
}

export default ItemListContainer;
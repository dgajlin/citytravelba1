// Contenedor del listado de Destinos comercializables
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { paquete } from "./Paquetes";

const ItemListContainer = () => {
    const [destinos,setDestinos] = useState([]);
    const urlParam = useParams();

    useEffect(() => {
        let isok = true;
        let mostrarInfo = (paquete) => {
            // Si no se filtro por categoria devuelvo todos los paquetes turisticos
            if (urlParam.categoria) 
                return paquete.filter(paquete => paquete.categoria === parseInt(urlParam.categoria))
            else
                return paquete;
        }
        let consultaInfo = (time, task) => {
            return new Promise((resolve, reject) => {
                if (isok) {
                    setTimeout(() => {
                        resolve(task)
                    }, time);
                } 
                else {
                    reject("Error")
                }
            });
        }
        consultaInfo(2000, mostrarInfo(paquete))
        .then(respuesta => setDestinos(respuesta))
        .catch(err => console.log("error", err))
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
                                  descripcion={destino.descripcion}
                                  precio={destino.precio}
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
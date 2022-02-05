// Contenedor del Detalle del Destino turistico seleccionado 
import { paquete } from "./Paquetes";
import ItemDetail from "../components/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [destinos, setDestinos] = useState({});
    const urlParam = useParams();

    useEffect(() => {
        let isok = true;
        let getItem = (time, task) => {
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
        getItem(2000, paquete.find((item) => item.id === parseInt(urlParam.id)))
            .then(result => setDestinos(result))
            .catch(err => console.log("error", err))
    },[urlParam]);

    return (
        <>
            <ItemDetail descripcion={destinos.descripcion}
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
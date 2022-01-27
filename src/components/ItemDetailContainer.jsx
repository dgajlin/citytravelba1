import { dataF1 } from "./DestDataF1";
import ItemDetail from "../components/ItemDetail";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
    const [destinos, setDestinos] = useState({});

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
        getItem(2000, dataF1[2])
            .then(result => setDestinos(result))
            .catch(err => console.log("error", err))
    },[]);

    return (
        <>
            <ItemDetail descripcion={destinos.descripcion}
                        title={destinos.title} 
                        thumbnail={destinos.thumbnail} 
                        costo={destinos.costo}
                        stock={destinos.stock}
            />
        </>
    );
}

export default ItemDetailContainer;
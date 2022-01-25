import { dataF1 } from "../components/DestDataF1";
import { dataF2 } from "../components/DestDataF2";
import ItemList from "../components/ItemList";
import ItemCount from "../components/ItemCount";
import Header from "../components/Header";
import { useEffect, useState } from "react";

const Home = () => {
  const [destinos,setDestinos] = useState([]);

  useEffect(() => {
      let isok = true;
      let mostrarInfo = (dataF1) => {
        return dataF1;
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
      consultaInfo(2000, mostrarInfo(dataF1))
        .then(respuesta => setDestinos(respuesta))
        .catch(err => console.log("error", err))
  },[destinos])

  return (
    <>
      <Header />
      <br/><br/>

      <ItemCount inicial="1" 
                 maximo="20" 
      />      

      <div className="row filaIndex">  
      {            
          destinos.map((destino) =>
            <div className="col-md-4 mainDestinos">
              <ItemList key={destino.id}
                       title={destino.title}
                       thumbnail={destino.thumbnail}
                       descripcion={destino.descripcion}
                       precio={destino.precio}
              />
            </div>
          )
      }
      </div>

      <div className="row filaIndex">  
      {            
          dataF2.map((destino) =>
            <div className="col-md-4 mainDestinos">
                <ItemList key={destino.id}
                         title={destino.title}
                         thumbnail={destino.thumbnail}   
                         descripcion={destino.descripcion}
                         precio={destino.precio}                
                />
            </div>
          )
      }
      </div>      
    </>
  );
}

export default Home;
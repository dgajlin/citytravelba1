import { dataF1 } from "../components/DestDataF1";
import { dataF2 } from "../components/DestDataF2";
import Destino from "../components/Destino";
import ItemCount from "../components/ItemCount";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <br/><br/>

      <ItemCount inicial="1" 
                 maximo="20" 
      />      

      <div className="row filaIndex">  
      {            
          dataF1.map((destino) =>
            <div className="col-md-4 mainDestinos">
              <Destino key={destino.id}
                       title={destino.title}
                       thumbnail={destino.thumbnail}                   
              />
            </div>
          )
      }
      </div>

      <div className="row filaIndex">  
      {            
          dataF2.map((destino) =>
            <div className="col-md-4 mainDestinos">
                <Destino key={destino.id}
                         title={destino.title}
                         thumbnail={destino.thumbnail}                   
                />
            </div>
          )
      }
      </div>      
    </>
  );
}

export default Home;
import Header from "../components/Header";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import Cart from "../components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = () => {
    return (      
        <>      
          <BrowserRouter>
              <Header />
              <br/><br/>
              <Routes>
                  <Route path="/" element={<ItemListContainer />} />
                  <Route path="/category/:categoria" element={<ItemListContainer />} />
                  <Route path="/item/:idItem" element={<ItemDetailContainer />} />
                  <Route path="/cart" element={<Cart />} />
              </Routes>
          </BrowserRouter>
      </>
    );
}

export default Home;
import Header from "../components/Header";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import MyCart from "../components/MyCart";
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
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<MyCart />} />
            </Routes>
        </BrowserRouter>
      </>
    );
}

export default Home;
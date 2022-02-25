import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import Cart from "../components/Cart";
import { Routes, Route } from "react-router-dom";

const Routers = () => {
    return (      
        <>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:categoria" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </>
    );
}

export default Routers;
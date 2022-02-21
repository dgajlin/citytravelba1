import Home from "./pages/Home";
import CartContextProvider from "./components/CartContext";

const App = () => {
  return <CartContextProvider><Home /></CartContextProvider>;
}

export default App;

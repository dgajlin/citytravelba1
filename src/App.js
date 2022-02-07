import Home from "./Pages/Home";
import CartContextProvider from "./components/CartContext";

const App = () => {
  return <CartContextProvider><Home /></CartContextProvider>;
}

export default App;

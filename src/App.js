import Home from "./pages/Home";
import CartContextProvider  from "./context/CartContext"

const App = () => {
  return <CartContextProvider><Home /></CartContextProvider>;
}

export default App;

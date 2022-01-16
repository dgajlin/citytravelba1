import Carrito from "./images/carrito.jpg";

let cantitems = 4;

const CartWidget = () => {
    return (
        <>
            <div className="contcarrito">
                <div className="imagen">
                    <img alt="Carrito" src={Carrito} className="imgCarrito" id="btnCarrito" />
                </div>
                <div className="items">
                    <label className="cantdestinos" id="cantDestinos">{cantitems}</label>
                    <label className="lbldestinos">&nbsp;items</label>
                </div>
            </div>
        </>
    );
}

export default CartWidget; 
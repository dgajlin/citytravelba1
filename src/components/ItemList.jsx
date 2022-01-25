import Item from "./Item";

const ItemList = (props) => {
    return (
        <>
            <h3 className="nombreDestino">{props.title}</h3>
            <div className="fotoDestino">
                <img src={props.thumbnail} alt={props.title} className="imagenDestino" />
            </div>
            <div className="descDestino">
                <Item descripcion={props.descripcion} />
            </div>
            <div className="botonDestino"> 
                <button type="button" className="btnAgregar">Agregar</button>
            </div>
        </>
    );
}

export default ItemList; 
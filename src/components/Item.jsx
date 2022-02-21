// Detalle de cada uno de los Destinos comercializables
const Item = (props) => {
    return (
        <>
            <h3 className="nombreDestino">{props.title}</h3>
            <div className="fotoDestino">
                <img src={props.thumbnail} alt={props.title} className="imagenDestinoDetail" />
            </div>
            <div className="descDestino">
                <p>
                    {props.descripcion}
                </p>
            </div>
        </>
    );
}

export default Item;   
// Detalle de cada uno de los Destinos comercializables
const Item = (props) => {
    return (
        <>
            <h3 className="nameDestino">{props.title}</h3>
            <div className="fotoDestino">
                <img src={props.thumbnail} alt={props.title} className="imageDestinoDetail" />
            </div>
            <div className="descDestino">
                <p>
                    {props.description}
                </p>
            </div>
        </>
    );
}

export default Item;   
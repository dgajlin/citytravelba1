const Destino = (props) => {
    return (
        <>
            <h3 className="nombreDestino">{props.title}</h3>
            <div className="fotoDestino">
                <img src={props.thumbnail} alt={props.title} className="imagenDestino" />
            </div>
            <div className="descDestino">
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </p>
            </div>
            <div className="botonDestino"> 
                <button type="button" className="btnAgregar">Agregar</button>
            </div>
        </>
    );
}

export default Destino; 
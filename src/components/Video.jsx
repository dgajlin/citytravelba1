import React, {useState} from "react";

const Video = () => {
    const [valoraciones, setValoraciones] = useState(0);

    const increment = () => {
        setValoraciones(valoraciones+1);
    }

    return (
        <>
              <p>{valoraciones} estrellas</p>
              <button onClick={increment}>Valorar</button>
        </>
    );
}

export default Video;   
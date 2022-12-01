import React from "react";

const ProductoItem = (props) => {
    const { nombre, titulo, descripcion, stock, precio, imagen, body } = props;

    return (
        <div className="productos">
            <h1>{nombre}</h1>
            <h2>{titulo}</h2>
            <h3>{descripcion}</h3>
            <h4>{stock}</h4>
            <h5>{precio}</h5>
            <img src={imagen}/> 
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>
    );

}

export default ProductoItem;
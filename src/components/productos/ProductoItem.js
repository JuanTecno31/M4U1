import React from "react";
// import '../../styles/components/pages/ProductosPage.css';

const ProductoItem = (props) => {

    const { nombre, titulo, descripcion, stock, precio, imagen, body } = props;

    return (

        <div className="productos">
            <h1>{nombre}</h1>
            <h2>{titulo}</h2>
            <h3>{descripcion}</h3>
            <img src={imagen} />
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>
    );

}

export default ProductoItem;
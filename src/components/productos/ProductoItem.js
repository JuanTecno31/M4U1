import React from "react";
import '../../styles/components/pages/ProductosPage.css';

const ProductoItem = (props) => {

    const { nombre, titulo, descripcion, stock, precio, imagen, body } = props;

    return (

        <div className="productos">
            <div class="container">
                <div class="nameprod">{nombre}</div>
                <div class="cajaprod">
                    <div class="marcoprod1">
                        <img src={imagen} class="fotoprod" alt="" />
                    </div>
                    <div class="marcoprod2">
                        <div class="textoprod">
                            <div class="detalle">{titulo}</div>
                            <div class="detalle">{descripcion}</div>
                            <div class="detalle">{stock}</div>
                            <div class="detalle">{precio}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: body }} />
        </div>
    );

}

export default ProductoItem;
import React from 'react';
import '../styles/components/pages/ProductosPage.css';

const Productos = (props) => {

    return (
        <main>
            <div class="container">
                <div class="categoria">Alfajores Cla Lafquen</div>
                <div class="box">
                    <div class="marco">
                        <img src="img/maicena.jpg" class="foto" alt="" />
                    </div>
                    <div class="marco2">
                        <div class="texto">
                            <div class="marca">MAICENA</div>
                            <div class="descripcion">Alfajor tradicional de maicena relleno de dulce de leche.</div>
                        </div>
                    </div>
                </div>

                <div class="box">
                    <div class="marco">
                        <img src="img/intenso.jpg" class="foto" alt="" />
                    </div>
                    <div class="marco2">
                        <div class="texto">
                            <div class="marca">CHOCOLATE INTENSO</div>
                            <div class="descripcion"> Alfajor relleno de dulce de leche, cubierto con un baño de chocolate
                                intenso.</div>
                        </div>
                    </div>
                </div>

                <div class="box">
                    <div class="marco">
                        <img src="img/marroc.jpg" class="foto" alt="" />
                    </div>
                    <div class="marco2">
                        <div class="texto">
                            <div class="marca">MARROC</div>
                            <div class="descripcion">Alfajor de dulce de leche con un bocadito de Marroc, cubierto de chocolate</div>
                        </div>
                    </div>
                </div>

                <div class="box">
                    <div class="marco">
                        <img src="img/cabsha.jpg" class="foto" alt="" />
                    </div>
                    <div class="marco2">
                        <div class="texto">
                            <div class="marca">CABSHA</div>
                            <div class="descripcion">Alfajor de dulce de leche con dos medallones de Cabsha, cubierto de chocolate</div>
                        </div>
                    </div>
                </div>

                <div class="box">
                    <div class="marco">
                        <img src="img/ferrero.jpg" class="foto" alt="" />
                    </div>
                    <div class="marco2">
                        <div class="texto">
                            <div class="marca">FERRERO</div>
                            <div class="descripcion">Alfajor de dulce de leche con un bocadito de Ferrero Roger, cubierto de chocolate</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );

}

export default Productos;
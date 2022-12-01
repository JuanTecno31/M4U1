import React from 'react';
import '../styles/components/pages/HomePage.css';
import Carousel from 'react-bootstrap/Carousel';

const HomePage = (props) => {

    return (
        <main>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/img/Picada.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="img/Quesos.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="img/vinos.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="img/alfajores.jpeg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            <h3 class="container">
                <div class="catalogo">
                    <div class="columna">
                        <div class="card h-100">
                            <img src="img/Salame1.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Salame tipo polonés</h5>
                                <p class="card-text">Salame tipo polonés, con queso gruyere. Imposible resistirse.
                                    Productos de calidad artesanal, elaborados en san Pedro.</p>
                            </div>
                        </div>
                        <div class="card h-100">
                            <img src="img/Panceta.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Panceta</h5>
                                <p class="card-text">Producto de calidad artesanal elaborado en San Pedro</p>
                            </div>
                        </div>
                        <div class="card h-100">
                            <img src="img/Mortadela.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Mortadela</h5>
                                <p class="card-text">Mortadela con pistachos estilo italiana
                                </p>
                            </div>
                        </div>
                        <div class="card h-100">
                            <img src="img/Gruyere.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Queso Gruyere</h5>
                                <p class="card-text">La particularidad de este queso, es que necesita un paso por una camara de calor
                                    para desarrollar sus ojos, luego del proceso de elaboración.
                                    Tiene un sabor medianamente picante y una textura lisa y uniforme.</p>
                            </div>
                        </div>
                        <div class="card h-100">
                            <img src="img/Bondiola.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Bondiola</h5>
                                <p class="card-text">Nuestra bondiola es una verdadera garantía de calidad, sabor y momentos únicos.</p>
                            </div>
                        </div>
                        <div class="card h-100">
                            <img src="img/Parmesano.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Parmesano</h5>
                                <p class="card-text">El parmesano es un famoso queso italiano de consistencia dura, madura y grasa. El
                                    puede usar rallado o gratinado.</p>
                            </div>
                        </div>
                        <div class="card h-100">
                            <img src="img/Chorizo.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Chorizo seco</h5>
                                <p class="card-text">Embutido en tripa natural, sin desgrasar, amasado y atado a mano. Con carnes
                                    seleccionadas y cortadas a cuchillo.
                                    Estilo picado grueso.
                                    Secado natural.</p>
                            </div>
                        </div>
                        <div class="card h-100">
                            <img src="img/Gouda.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Gouda</h5>
                                <p class="card-text">Queso Gouda, tipo Holandes elaborado en Santa Maria, Los Toldos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </h3>
        </main>

    );

}

export default HomePage;
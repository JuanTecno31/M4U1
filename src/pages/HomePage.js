import React from 'react';

import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {

    return (
        <main>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="img/Picada.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="img/Quesos.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="img/vinos.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="img/alfajores.jpeg" class="d-block w-100" alt="..." />
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

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
                            <div class="card h-100">
                                <img src="img/ricota.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Queso Ricotta</h5>
                                    <p class="card-text">De color blanco, su textura es blanda y granulosa. Su sabor es extremadamente
                                        suave, convirtiéndose en el queso perfecto para la elaboración de postres.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </h3>
            </div>
        </main>

    );

}

export default HomePage;
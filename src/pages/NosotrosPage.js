import React from 'react';
import '../styles/components/pages/NosotrosPage.css'

const NosotrosPage = (props) => {

    return (
        <main>
            <div class="container">
                <div class="categoria">Nuestras raíces</div>
                <div class="box">
                    <div class="marco">
                        <img src="img/9dejulio.jpg" class="foto" alt="" />
                    </div>
                    <div class="marco2">
                        <div class="texto">
                            <div class="marca">9 de JULIO</div>
                            <div class="descripcion">Nueve de Julio es una ciudad ubicada en el interior de la província de Buenos Aires.</div>
                        </div>
                    </div>
                </div>

                <div class="box">
                    <div class="marco">
                        <img src="img/12deoctubre.jpg" class="foto" alt="" />
                    </div>
                    <div class="marco2">
                        <div class="texto">
                            <div class="marca">12 de OCTUBRE</div>
                            <div class="descripcion">Doce de Octubre es un pueblo perteneciente al partido de 9 de Julio</div>
                        </div>
                    </div>
                </div>

                <div class="categoria">¿Quiénes somos?</div>

                <div class="box">
                    <div class="marco">
                        <img src="img/local.jpeg" class="foto" alt="" />
                    </div>
                    <div class="marco2">
                        <div class="texto">
                            <div class="marca">El Faro</div>
                            <div class="descripcion">Nosotros somos El Faro, un lugar donde podés volver a reencontrarte con tus raíces</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}


export default NosotrosPage;
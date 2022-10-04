import React from 'react';

const HomePage = (props) => {

    return (
        <main className='holder'>
            <div className='homeimg'>
                <img src='img/logo.jpg' width={500} alt='logo' />
            </div>
            <div className='columnas'>
                <div className='bienvenidos'>
                    <h2>Bienvenidos</h2>
                    <p>Lorem</p>
                    <p>Lorem</p>
                </div>
                <div className='testimonios'>
                    <h2>Testimonios</h2>
                    <div className='testimonio'>
                        <span class="cita">Simplemente Excelente </span>
                        <span class="autor">Juan Perez - zapatos.com</span>
                    </div>
                </div>
            </div>
        </main>
        
    );

}

export default HomePage;
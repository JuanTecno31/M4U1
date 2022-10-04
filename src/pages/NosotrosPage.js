import React from 'react';

const Nosotros = (props) => {

    return (
        <main className='holder'>
            <div className='historia'></div>
            <h2>Nuestras raíces</h2>
            <h3>9 de Julio</h3>
            <img src='img/9dejulio.jpg' width={150} alt='9dejulio'></img>
            <p>Nueve de Julio es una ciudad ubicada en el interior de la província de Buenos Aires</p>
            <h3>12 de Octubre</h3>
            <img src='img/12deoctubre.jpg' width={150} alt='12deoctubre'></img>
            <p>Doce de Octubre es un pueblo perteneciente al partido de 9 de Julio</p>
            <h2>¿Quiénes somos?</h2>
            <img src='img/local.jpeg' width={150} alt='local'></img>
            <p>Nosotros somos El Faro, un lugar donde podés volver a encontrarte con tus raíces</p>
        </main> 
    );
    }


export default Nosotros;
import React from 'react';

const Contacto = (props) => {

    return (
        <main className='holder contacto'>
            <div>
                <h2>Contacto rápido</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name=""></input>                    
                    </p>
                    <p>
                        <label for="telefono">Teléfono</label>
                        <input type="text" name=""></input>                    
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name=""></textarea>                    
                    </p>
                    <p class="acciones"><input type="submit" value="Enviar" />                                   
                    </p>
                </form>
            </div>
            <div class="datos">
                <ul>
                    <li>Whatsapp: </li>
                    <li>Telefono: </li>
                    <li>Instagram: </li>
                </ul>
            </div>
        </main>
    );

}

export default Contacto;
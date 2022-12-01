import '../styles/components/pages/contactoPage.css';
import React, { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props) => {

  const initialForm = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value
    }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true)
    const response = await
      axios.post('http://localhost:3000/api/contacto', formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm)
    }
  }

  return (
    <main>
      <section class="page-header" data-store="page-title">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-9">
              <h1 class="h2 title-line mb-2">Contacto</h1>
            </div>
          </div>
        </div>
      </section>


      <div class="contact">
        <div class="box1">
          <div class="caja">
            <i class="fa-brands fa-whatsapp"></i>
            <div class="texto1">
              <p>WhatsApp</p>
            </div>
            <div class="texto1">
              <p>2317632903</p>
            </div>
          </div>

          <div class="caja">
            <i class="fa-solid fa-phone-flip"></i>
            <div class="texto2">
              <p>TELÉFONO</p>
            </div>
            <div class="texto2">
              <p>2317632903</p>
            </div>
          </div>

          <div class="caja">
            <i class="fa-sharp fa-solid fa-map-location-dot"></i>
            <div class="texto3">
              <p>DIRECCIÓN</p>
            </div>
            <div class="texto3">
              <p>Calle 45 N°738 entre 9 y 10 - La Plata</p>
            </div>
          </div>
        </div>

        <div class="box2">
          <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
            <div class="col-12">
              <label for="inputName" className="form-label" >NOMBRE</label>
              <input type="text" class="form-control" name="nombre" id="inputName" value={formData.nombre} onChange={handleChange} />
            </div>
            <div class="row">
              <div class="col-md-6">
                <label for="inputEmail" class="form-label">EMAIL</label>
                <input type="email" name="email" class="form-control" id="inputEmail" value={formData.email} onChange={handleChange} />
              </div>
              <div class="col-md-6">
                <label for="inputPhone" class="form-label">TELEFONO</label>
                <input type="text" name="telefono" class="form-control" id="inputPhone" value={formData.telefono} onChange={handleChange} />
              </div>
            </div>
            <div class="col-12">
              <label for="inputMessage" class="form-label">MENSAJE</label>
              <textarea class="form-control" name="mensaje" id="floatingTextarea" value={formData.mensaje} onChange={handleChange} ></textarea>
            </div>
            {sending ? <p>Enviando...</p> : null}
            {msg ? <p>{msg}</p> : null}
            <p>
              <input type="submit" value="ENVIAR MENSAJE" />
            </p>
          </form>
        </div>
        {/* <div class="box3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.690670376246!2d-57.959010085184005!3d-34.91421148149883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e6343a998b85%3A0x6d11be3225cba3d5!2sC.%2045%20738%2C%20B1900AED%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1662135135222!5m2!1ses-419!2sar"
              width="600" height="390" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div> */}
      </div>
    </main>
  );
}


export default ContactoPage;
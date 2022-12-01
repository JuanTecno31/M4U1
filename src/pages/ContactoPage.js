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
      axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);
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
              <h1>Contacto</h1>
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
          <div class="box3">
            <div>
              <img class="mapa" src="img/mapa.jpg" />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}


export default ContactoPage;
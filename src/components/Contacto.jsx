import React from 'react'
import '../components/contacto.css'

export default function Contacto() {
  return (
    <div className='contenedor'>
    <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
    <form className="form">
        <label className="form-label">
            Correo:
            <input className="form-input" type="email" name="email" />
        </label>
        <br />
        <label className="form-label">
            Descripción:
            <textarea className="form-input" name="description" />
        </label>
        <br />
        <button className="form-button" type="">Enviar</button>
    </form>
    </div>
  )
}

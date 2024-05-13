import React from 'react';
import '../../../assets/css/public/login/LeftBienvenidaComponent.css';
import LoginBienvenida from '../../../assets/img/public/login/ImagenBienvenida.png';

export default function LeftBienvenidaComponent({ title }) {
  return (
    <section className="bienvenida">
      <figure className="img-bienvenida">
        <img src={LoginBienvenida} alt="..." />
      </figure>
      <h1>{title}</h1>
      <h2>TransporTecnology</h2>
    </section>
  )
}
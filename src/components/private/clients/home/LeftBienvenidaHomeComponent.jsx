import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../assets/css/private/clients/home/LeftBienvenidaHomeComponent.css';
import imagenMasculino from '../../../../assets/img/private/clients/ImagenIconoMasculino.png'
import { FaChevronRight } from "react-icons/fa";
import { CUSTOMERRUTAS, PATHS } from '../../../../models/RoutesModels';

export default function LeftBienvenidaHomeComponent() {
  return (
    <div className='bienvenidaHomeContainer'>
      <h1 className='title'>Bienvenido</h1><br />
      <p className='text'>
        Con nuestra plataforma de reservas en línea,
        puedes explorar múltiples opciones de rutas,
        horarios y tipos de buses para encontrar el que mejor se adapte a tus necesidades.
        Ya sea que viajes por negocios, vacaciones o cualquier otro motivo,
        nuestro objetivo es hacer que tu proceso de reserva sea lo más sencillo y agradable posible.
      </p><br />
      <section className='btnGroup'>
        <Link to={"/" + PATHS.CLIENTE + "/" + CUSTOMERRUTAS.TRAVELS} className='link'>
          <button type='submit' className='btnReservation'>
            Reservar viaje
            <FaChevronRight />
          </button>
        </Link>
        <Link to={"/" + PATHS.CLIENTE + "/" + CUSTOMERRUTAS.MYACCOUNT} className='link'>
          <button type='submit' className='btnMyAccount'>
            Mi cuenta
            <div className='imgIcon'>
              <img src={imagenMasculino} alt="..." />
            </div>
          </button>
        </Link>
      </section>
    </div>
  )
}

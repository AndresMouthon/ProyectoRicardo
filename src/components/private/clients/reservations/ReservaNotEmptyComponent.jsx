import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../../../assets/css/private/clients/reservations/ReservaNotEmptyComponent.css';
import imagenSinReserva from '../../../../assets/img/private/clients/ImagenSinReserva.png';
import { CUSTOMERRUTAS, PATHS } from '../../../../models/RoutesModels';

export default function ReservaNotEmptyComponent() {
  return (
    <div className="reservaEmpty">
      <figure className="img-sinReserva">
        <img src={imagenSinReserva} alt="..." />
      </figure>
      <h1>No tienes reservas</h1>
      <Link to={"/" + PATHS.CLIENTE + "/" + CUSTOMERRUTAS.TRAVELS} className='link' style={{ textDecoration: 'none' }}>
        <button type='submit' className='btnReservation'>
          Reservar viaje
          <FaChevronRight />
        </button>
      </Link>
    </div>
  )
}

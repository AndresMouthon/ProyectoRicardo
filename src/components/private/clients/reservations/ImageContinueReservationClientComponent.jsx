import React from 'react';
import '../../../../assets/css/private/clients/reservations/ImageContinueReservationClientComponent.css';
import { APIUSER } from '../../../../models/EnpointsModels';

export default function ImageContinueReservationClientComponent({ imagen }) {
  return (
    <div className='imagenContainer'>
      <img src={APIUSER.RUTAFRONT + imagen} alt={APIUSER.RUTAFRONT + imagen} />
    </div>
  )
}

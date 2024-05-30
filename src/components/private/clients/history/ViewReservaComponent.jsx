import React from 'react';
import {
  FcBusinessman,
  FcConferenceCall,
  FcMoneyTransfer,
  FcTimeline
} from "react-icons/fc";
import '../../../../assets/css/private/clients/history/ViewReservaComponent.css';
import { APIUSER } from '../../../../models/EnpointsModels';

export default function ViewReservaComponent({ reserva }) {

  return (
    <div className='cardReservaContent'>
      <div className="card">
        <section className="imgCity">
          <img
            src={APIUSER.RUTAFRONT + reserva.viaje.imagen}
            alt="..."
          />
        </section>
        <section className="informationCity">
          <span className="informationGroup">
            <FcBusinessman className="iconPerson" />
            <h1 className="TitlePerson">{reserva.usuario.nombre} {reserva.usuario.apellido}</h1>
          </span>
          <span className="informationGroup">
            <FcTimeline className="iconRoute" />
            <h1 className="TitleRoute">{reserva.transporte.ruta}</h1>
          </span>
          <span className="informationGroup">
            <FcConferenceCall className="iconPassenger" />
            <h1 className="TitlePassenger">Pasajeros: {reserva.pasajeros}</h1>
          </span>
          <span className="informationGroup">
            <FcMoneyTransfer className="iconMoney" />
            <h1 className="TitleMoney">Valor: $ {reserva.pasajeros * reserva.viaje.precio}</h1>
          </span>
        </section>
      </div>
    </div>
  )
  
}

import React from 'react';
import { FcFinePrint } from "react-icons/fc";
import '../../../../assets/css/private/clients/history/ViewReservaComponent.css';
import imagen from '../../../../assets/img/private/clients/imagenHistorial.png';

export default function ViewNotEmptyReservaComponent() {
  return (
    <div className='cardReservaContent'>
      <div className="card">
        <section className="imgCity">
          <img
            src={imagen}
            alt="..."
          />
        </section>
        <section className="informationHistory">
          <span className="informationGroup">
            <FcFinePrint className="iconHistory" />
            <h1 className="TitleHistory">SU HISTORIAL</h1>
          </span>
        </section>
      </div>
    </div>
  )
}

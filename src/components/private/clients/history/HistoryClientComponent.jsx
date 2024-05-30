import React from 'react';
import '../../../../assets/css/private/clients/history/HistoryClientComponent.css';
import ViewHistoryComponent from './ViewHistoryComponent';
import ViewReservaComponent from './ViewReservaComponent';
import ViewNotEmptyReservaComponent from './ViewNotEmptyReservaComponent';

function isEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export default function HistoryClientComponent({ historialReservas, verReserva, verReservaUsuario }) {
  return (
    <div className='historyContent'>
      <ViewHistoryComponent
        historialReservas={historialReservas}
        verReserva={verReserva}
        verReservaUsuario={verReservaUsuario}
      />
      {verReservaUsuario && !isEmpty(verReservaUsuario) ? (
        <ViewReservaComponent reserva={verReservaUsuario} />
      ) : (
        <ViewNotEmptyReservaComponent />
      )}
    </div>
  )
}
